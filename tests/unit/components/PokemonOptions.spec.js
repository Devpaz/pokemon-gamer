import {shallowMount} from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions';
import { pokemons } from '../mocks/pokemons.mock';


describe('PokemonOptions component',() => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount( PokemonOptions,  {
            props: {
                pokemons
            }
        })
    })
    test('debe de hacer match con el snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('debe mostrar las 04 opciones correctamente', () => {
        //const pokemons=pokemons
        const liTags = wrapper.findAll( 'li' )
        expect(liTags.length).toBe(4)
        expect (liTags[0].text() ).toBe('bulbasaur')
        expect (liTags[1].text() ).toBe('ivysaur')
        expect (liTags[2].text() ).toBe('venusaur')
        expect (liTags[3].text() ).toBe('charmander')

        
    })

    test('debe de emiti "selection" con sus respectivos parametros al hacer click ', () => {
        const [li1, li2, li3, li4] = wrapper.findAll('li')
        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')

        expect(wrapper.emitted('selectionPokemon').length ).toBe(4)
        expect(wrapper.emitted('selectionPokemon')[0] ).toStrictEqual([1])
        expect(wrapper.emitted('selectionPokemon')[1] ).toStrictEqual([2])
        expect(wrapper.emitted('selectionPokemon')[2] ).toStrictEqual([3])
        expect(wrapper.emitted('selectionPokemon')[3] ).toStrictEqual([4])
        console.log(wrapper.emitted('selectionPokemon'))
    })
})