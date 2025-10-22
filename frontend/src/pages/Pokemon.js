import React, { useState, useEffect } from 'react';
import { Search, X, Filter, ChevronDown, Loader2, Star, Sparkles } from 'lucide-react';

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [displayedPokemons, setDisplayedPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchError, setSearchError] = useState('');

  const ITEMS_PER_PAGE = 20;
  const TOTAL_POKEMON = 151; // Primera generación

  const pokemonTypes = [
    'all', 'normal', 'fire', 'water', 'electric', 'grass', 'ice',
    'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug',
    'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
  ];

  // Initial load
  useEffect(() => {
    loadPokemons();
  }, [page]);

  // Filter pokemons
  useEffect(() => {
    filterPokemons();
  }, [searchTerm, selectedType, pokemons]);

  const loadPokemons = async () => {
    if (loading) return;
    
    setLoading(true);
    try {
      const offset = (page - 1) * ITEMS_PER_PAGE;
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${ITEMS_PER_PAGE}&offset=${offset}`
      );
      const data = await response.json();

      // Fetch detailed data for each pokemon
      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon) => {
          const detailResponse = await fetch(pokemon.url);
          return await detailResponse.json();
        })
      );

      setPokemons(prev => {
        const combined = [...prev, ...detailedPokemons];
        // Remove duplicates
        const unique = combined.filter((v, i, a) => a.findIndex(t => t.id === v.id) === i);
        return unique;
      });

      if (offset + ITEMS_PER_PAGE >= TOTAL_POKEMON) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error loading pokemons:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterPokemons = () => {
    let filtered = [...pokemons];

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pokemon.id.toString() === searchTerm
      );
    }

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(pokemon =>
        pokemon.types.some(type => type.type.name === selectedType)
      );
    }

    setDisplayedPokemons(filtered);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.value;
    
    // Validation
    if (value.length > 0 && value.length < 2) {
      setSearchError('El término de búsqueda debe tener al menos 2 caracteres');
    } else {
      setSearchError('');
    }
    
    setSearchTerm(value);
  };

  const searchPokemonByName = async (name) => {
    if (!name.trim()) {
      setSearchError('Por favor ingresa un nombre o ID');
      return;
    }

    if (name.trim().length < 2) {
      setSearchError('El término de búsqueda debe tener al menos 2 caracteres');
      return;
    }

    setSearchError('');
    setLoading(true);
    
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
      if (response.ok) {
        const pokemon = await response.json();
        // Add to list if not exists
        const exists = pokemons.find(p => p.id === pokemon.id);
        if (!exists) {
          setPokemons(prev => [...prev, pokemon]);
        }
        // Open details
        handlePokemonClick(pokemon);
      } else {
        setSearchError('Pokémon no encontrado. Intenta con otro nombre o ID.');
      }
    } catch (error) {
      setSearchError('Error al buscar el Pokémon. Por favor intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handlePokemonClick = async (pokemon) => {
    setLoadingDetails(true);
    setSelectedPokemon(null);

    try {
      // Fetch species data for evolution chain
      const speciesResponse = await fetch(pokemon.species.url);
      const speciesData = await speciesResponse.json();

      // Fetch evolution chain
      const evolutionResponse = await fetch(speciesData.evolution_chain.url);
      const evolutionData = await evolutionResponse.json();

      // Parse evolution chain
      const evolutions = parseEvolutionChain(evolutionData.chain);

      setSelectedPokemon({
        ...pokemon,
        evolutions,
        description: speciesData.flavor_text_entries.find(
          entry => entry.language.name === 'es' || entry.language.name === 'en'
        )?.flavor_text || 'No description available'
      });
    } catch (error) {
      console.error('Error loading pokemon details:', error);
      setSelectedPokemon(pokemon);
    } finally {
      setLoadingDetails(false);
    }
  };

  const parseEvolutionChain = (chain) => {
    const evolutions = [];
    let current = chain;

    while (current) {
      evolutions.push({
        name: current.species.name,
        url: current.species.url
      });
      current = current.evolves_to[0];
    }

    return evolutions;
  };

  const getTypeColor = (type) => {
    const colors = {
      normal: 'bg-slate-400',
      fire: 'bg-red-500',
      water: 'bg-blue-500',
      electric: 'bg-yellow-400',
      grass: 'bg-green-500',
      ice: 'bg-cyan-300',
      fighting: 'bg-red-700',
      poison: 'bg-purple-500',
      ground: 'bg-yellow-600',
      flying: 'bg-indigo-400',
      psychic: 'bg-pink-500',
      bug: 'bg-lime-500',
      rock: 'bg-yellow-800',
      ghost: 'bg-purple-700',
      dragon: 'bg-indigo-700',
      dark: 'bg-gray-800',
      steel: 'bg-slate-500',
      fairy: 'bg-pink-300'
    };
    return colors[type] || 'bg-slate-400';
  };

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setPage(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-orange-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Sparkles className="w-8 h-8 text-orange-500" />
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="text-slate-900 dark:text-white">Pokédex</span>
                <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent"> Interactiva</span>
              </h1>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Explora, busca y descubre todos los Pokémon con información detallada
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Search Bar */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Buscar Pokémon
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Nombre o ID del Pokémon..."
                    className="w-full px-4 py-3 pl-12 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  {searchTerm && (
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setSearchError('');
                      }}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
                {searchError && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">{searchError}</p>
                )}
                <button
                  onClick={() => searchPokemonByName(searchTerm)}
                  className="mt-2 w-full md:w-auto px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg hover:from-orange-600 hover:to-amber-700 transition-all"
                >
                  Buscar
                </button>
              </div>

              {/* Type Filter */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Filtrar por Tipo
                </label>
                <div className="relative">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all appearance-none"
                  >
                    {pokemonTypes.map(type => (
                      <option key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              Mostrando {displayedPokemons.length} Pokémon
              {searchTerm && ` con "${searchTerm}"`}
              {selectedType !== 'all' && ` del tipo ${selectedType}`}
            </div>
          </div>

          {/* Pokemon Grid */}
          {displayedPokemons.length > 0 ? (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
                {displayedPokemons.map((pokemon) => (
                  <div
                    key={pokemon.id}
                    onClick={() => handlePokemonClick(pokemon)}
                    className="group cursor-pointer bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-orange-500"
                  >
                    <div className="relative">
                      <div className="absolute top-2 right-2 bg-slate-900/70 text-white text-xs font-bold px-2 py-1 rounded-full">
                        #{pokemon.id.toString().padStart(3, '0')}
                      </div>
                      <img
                        src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
                        alt={pokemon.name}
                        className="w-full h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-center font-bold text-slate-900 dark:text-white capitalize mt-2">
                      {pokemon.name}
                    </h3>
                    <div className="flex flex-wrap gap-1 justify-center mt-2">
                      {pokemon.types.map((type) => (
                        <span
                          key={type.type.name}
                          className={`${getTypeColor(type.type.name)} text-white text-xs px-2 py-1 rounded-full font-semibold`}
                        >
                          {type.type.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && !searchTerm && selectedType === 'all' && (
                <div className="text-center">
                  <button
                    onClick={handleLoadMore}
                    disabled={loading}
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Cargando...</span>
                      </>
                    ) : (
                      <span>Cargar Más Pokémon</span>
                    )}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                {loading ? 'Cargando Pokémon...' : 'No se encontraron Pokémon'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Pokemon Details Modal */}
      {selectedPokemon && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedPokemon(null)}>
          <div 
            className="bg-white dark:bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {loadingDetails ? (
              <div className="flex items-center justify-center p-20">
                <Loader2 className="w-12 h-12 animate-spin text-orange-500" />
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="relative bg-gradient-to-br from-orange-500 to-amber-600 p-8 rounded-t-2xl">
                  <button
                    onClick={() => setSelectedPokemon(null)}
                    className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-4xl font-bold text-white capitalize mb-2">
                        {selectedPokemon.name}
                      </h2>
                      <div className="flex gap-2">
                        {selectedPokemon.types.map((type) => (
                          <span
                            key={type.type.name}
                            className={`${getTypeColor(type.type.name)} text-white px-4 py-1 rounded-full font-semibold`}
                          >
                            {type.type.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white/80 text-sm">Pokémon</div>
                      <div className="text-3xl font-bold text-white">
                        #{selectedPokemon.id.toString().padStart(3, '0')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Image and Basic Info */}
                    <div>
                      <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-8 mb-6">
                        <img
                          src={selectedPokemon.sprites.other['official-artwork'].front_default}
                          alt={selectedPokemon.name}
                          className="w-full h-64 object-contain"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                            {selectedPokemon.height / 10}m
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">Altura</div>
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                            {selectedPokemon.weight / 10}kg
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">Peso</div>
                        </div>
                      </div>
                    </div>

                    {/* Stats and Details */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                          Estadísticas Base
                        </h3>
                        <div className="space-y-3">
                          {selectedPokemon.stats.map((stat) => (
                            <div key={stat.stat.name}>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 capitalize">
                                  {stat.stat.name.replace('-', ' ')}
                                </span>
                                <span className="text-sm font-bold text-slate-900 dark:text-white">
                                  {stat.base_stat}
                                </span>
                              </div>
                              <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-orange-500 to-amber-600 rounded-full transition-all duration-500"
                                  style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                          Habilidades
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedPokemon.abilities.map((ability) => (
                            <span
                              key={ability.ability.name}
                              className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg font-medium capitalize"
                            >
                              {ability.ability.name.replace('-', ' ')}
                            </span>
                          ))}
                        </div>
                      </div>

                      {selectedPokemon.evolutions && selectedPokemon.evolutions.length > 1 && (
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                            Cadena de Evolución
                          </h3>
                          <div className="flex items-center justify-start space-x-2">
                            {selectedPokemon.evolutions.map((evo, index) => (
                              <React.Fragment key={evo.name}>
                                <div className="text-center">
                                  <div className="text-sm font-medium text-slate-700 dark:text-slate-300 capitalize">
                                    {evo.name}
                                  </div>
                                </div>
                                {index < selectedPokemon.evolutions.length - 1 && (
                                  <span className="text-slate-400">→</span>
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
