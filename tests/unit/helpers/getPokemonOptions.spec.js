import getPokemonOptions, {getPokemons, getPokemonName} from "@/helpers/getPokemonOptions";

describe('getPokemonOptions helpers', () => {
    test('debe de regresar un arreglo de numeros ', () => {
        const pokemons = getPokemons()
        expect( pokemons.length ).toBe(650)
        expect( pokemons[0] ).toBe(1)
        expect( pokemons[500] ).toBe(501)
        expect( pokemons[649] ).toBe(650)
        
    })

    test('debe de retornar un arreglo de 04 elementos con nombres de pokemon', async() => {
        const pokemons = await getPokemonName([1,2,3,4])
        expect( pokemons ).toStrictEqual([
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
        ])
        
    })

    test('getPokemonOptions debe de retornar un arreglo mezclado', async () => {
        const pokemons = await getPokemonOptions()
        expect( pokemons.length ).toBe(4)
        expect( pokemons ).toStrictEqual([
            { 
                name: expect.any(String), 
                id: expect.any(Number) 
            },
            { 
                name: expect.any(String), 
                id: expect.any(Number) 
            },
            { 
                name: expect.any(String), 
                id: expect.any(Number) 
            },
            { 
                name: expect.any(String), 
                id: expect.any(Number) 
            }
        ])

    })

})