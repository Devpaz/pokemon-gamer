<template>
  <h1>¿Quién es este pokémon?</h1>
  <PokemonPicture :pokemonId="4" :showPokemon="true"/>
  <PokemonOptions :pokemons="pokemonArr"/>
  
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
        pokemonArr : []
      }
    },
    methods: {
      async mixPokemonArray() {
        this.pokemonArr = await getPokemonOptions()
      }
    },
    mounted() {
      this.mixPokemonArray()
    }

}
</script>
