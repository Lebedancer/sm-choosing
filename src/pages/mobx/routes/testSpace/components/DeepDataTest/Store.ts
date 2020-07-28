import { observable, action, computed, observe } from 'mobx';

let autoApdater: any;

// test new values
export class Store{
    @observable massData = [
        {obj: {
                one: ['123213', '123213',  '123213',],
                two: ['22222', '22222', '22222', '22222',],
                three: ['333333', '333333', '333333'],
                four: [{text: 'testArray1'}, {text: 'testArray1'}, {text: 'testArray1'}, {text: 'testArray1'}],
            }},
        {obj: {
                one: ['123213', '123213',  '123213',],
                two: ['22222', '22222', '22222', '22222',],
                three: ['333333', '333333', '333333'],
                four: [{text: 'testArray1'}, {text: 'testArray1'}, {text: 'testArray1'}, {text: 'testArray1'}],
            }},
        {obj: {
                one: ['123213', '123213',  '123213',],
                two: ['22222', '22222', '22222', '22222',],
                three: ['333333', '333333', '333333'],
                four: [{text: 'testArray1'}, {text: 'testArray1'}, {text: 'testArray1'}, {text: 'testArray1'}],
            }},
        {obj: {
                one: ['123213', '123213',  '123213',],
                two: ['22222', '22222', '22222', '22222',],
                three: ['333333', '333333', '333333'],
                four: [{text: 'testArray1'}, {text: 'testArray1'}, {text: 'testArray1'}, {text: 'testArray1'}],
            }},
    ]

  @observable testArray = [
    {text: 'testArray1'},
    {text: 'testArray2'},
    {text: 'testArray3'},
    {text: 'testArray4'},
  ];

  @observable testObj = {
    one: ['123213', '123213',  '123213',],
    two: ['22222', '22222', '22222', '22222',],
    three: ['333333', '333333', '333333'],
    four: ['4444444', '4444444', '4444444', '4444444'],
  }

  @observable testCombination = [
    {obj: {
        one: ['123213', '123213',  '123213',],
        two: ['22222', '22222', '22222', '22222',],
        three: ['333333', '333333', '333333'],
        four: ['4444444', '4444444', '4444444', '4444444'],
      }},
    {obj: {
        one: ['123213', '123213',  '123213',],
        two: ['22222', '22222', '22222', '22222',],
        three: ['333333', '333333', '333333'],
        four: ['4444444', '4444444', '4444444', '4444444'],
      }},
    {obj: {
        one: ['123213', '123213',  '123213',],
        two: ['22222', '22222', '22222', '22222',],
        three: ['333333', '333333', '333333'],
        four: ['4444444', '4444444', '4444444', '4444444'],
      }},
    {obj: {
        one: ['123213', '123213',  '123213',],
        two: ['22222', '22222', '22222', '22222',],
        three: ['333333', '333333', '333333'],
        four: ['4444444', '4444444', '4444444', '4444444'],
      }},
  ]

  @action toggleTestArrayChange() {
      this.testArray[0].text = `${Math.random()}`;
  }

  @action toggleTestObjChange() {
    this.testObj['four'][0] = `${Math.random()}`;
  }

  @action toggleTestObjBlock() {
    this.testObj['four'] = [`${Math.random()}`, `${Math.random()}`, `${Math.random()}`,];
  }

    @action toggleTestCombiBlock() {
        this.testCombination[0]['obj']['four'] = [`${Math.random()}`, `${Math.random()}`, `${Math.random()}`,];
    }

    @action toggleTestCombiItem() {
        this.testCombination[0]['obj']['four'][0] = `${Math.random()}`;
    }

    @action toggleMasData() {
        this.massData = [...this.massData];
    }

    @action injectMasData() {
        this.massData[0]['obj']['four']  = [{text: 'testArray1'}, {text: 'testArray1'}, {text: 'testArray1'}, {text: 'testArray1'}];
    }
}

export default new Store();
