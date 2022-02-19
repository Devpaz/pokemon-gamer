<template>
<h1 v-if="!pokemon">Espere por favor...</h1>
<div v-else>
  <h1>¿Quién es este pokémon?</h1>
  <PokemonPicture 
    :pokemon-id="pokemon.id" 
    :show-pokemon="showPokemon"
  />

  <PokemonOptions 
      :pokemons="pokemonArr"
      @selection-pokemon="checkAnswer"
  />

</div>
  
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'
import getPokemonOptions from'@/helpers/getPokemonOptions'

//console.log(getPokemonOptions())

export default {
    components: { PokemonOptions, PokemonPicture },
    data () {
      return {
        pokemonArr : [],
        pokemon: null,
        showPokemon: false
      }
    },
    methods: {
      async mixPokemonArray() {
        this.pokemonArr = await getPokemonOptions()
        const rndInt = Math.floor( Math.random() * 4 )
        this.pokemon = this.pokemonArr[rndInt]
      },
      checkAnswer( pokemonId ) {
        this.showPokemon = true
        console.log('pokemon page llamado', pokemonId)

      }

    },
    mounted() {
      this.mixPokemonArray()
    }

}
</script>
