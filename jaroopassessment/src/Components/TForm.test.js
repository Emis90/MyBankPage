import React from "react";
import Enzyme, { shallow  } from "enzyme";
import TForm from './TForm'
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe('Transaction form ', () => {
    test('renders', ()=> {
        const wraper = shallow(<TForm />)
        expect(wraper.exists()).toBe(true)
        expect( wraper.find('button').text()
          ).toEqual('X')
        expect(wraper.find('form').simulate('click', {
            target: { value: 'Submit'}
        }))
        const h2 = shallow(<h2>Add another transaction</h2>)
        expect(h2).toMatchSnapshot()
    })
})