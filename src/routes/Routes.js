import React from 'react';
import {Route,Switch} from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Cart from '../pages/Cart';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Product from '../pages/Product';

const Routes = () => {
    return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/catalog" exact component={Catalog} />
                <Route path="/catalog/:slug" component={Product} />
                <Route path="/contact" component={Contact} />
                <Route path="/blog" component={Blog} />
                <Route path="/cart" component={Cart} />
            </Switch>
    )
}

export default Routes
