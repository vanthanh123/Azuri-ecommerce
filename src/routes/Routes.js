import React from 'react';
import {Route,Switch} from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Cart from '../pages/Cart';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

const Routes = () => {
    return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/catalog" component={Catalog} />
                <Route path="/catalog:slug" component={Catalog} />
                <Route path="/contact" component={Contact} />
                <Route path="/blog" component={Blog} />
                <Route path="/cart" component={Cart} />
            </Switch>
    )
}

export default Routes
