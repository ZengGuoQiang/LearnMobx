import React from 'react';
import { observable,action } from 'mobx';
import { observer } from 'mobx-react';


class appStore {
    @observable name = 'gl'
    @action change(){
    // this.name='gaoliang'
    console.log('changed')
    }
}

export default new appStore()