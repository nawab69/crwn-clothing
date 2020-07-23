

import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import { CollectionPreview } from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
    constructor(){
        super();
        this.state = {
            collections : SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            
            <div>
                <h1>Shop Page </h1>

                {
                    collections.map(({id, ...otherCollectionsProps}) => (
                        <CollectionPreview key={id} {...otherCollectionsProps} /> 
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;