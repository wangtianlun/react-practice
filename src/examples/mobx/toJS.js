import React from 'react';
import { observable, toJS, isObservableObject, extendObservable, action } from 'mobx';

export default class Example extends React.Component {
  render() {
    return null
  }

  componentDidMount() {
    const obj = observable({
      x: 1
    })

    const objClone = toJS(obj);

    console.log(isObservableObject(obj));
    console.log(isObservableObject(objClone));

    const Person = function(firstName, lastName) {
      extendObservable(this, {
        firstName,
        lastName,
        get fullName() {
          return this.firstName + ' ' + this.lastName
        },
        setFirstName(firstName) {
          this.firstName = firstName
        }
      }, {
        setFirstName: action
      })
    }

    var matthew = new Person('mathew', 'Henry');

    extendObservable(matthew, {
      age: 353
    })

    console.log(matthew)

    var testObj = observable({b: 1})

    extendObservable(testObj, {
      c: 1
    })

    console.log(testObj.c)
  }
}