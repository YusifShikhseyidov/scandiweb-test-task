/* eslint-disable react/prop-types */
import React, { Component } from "react";
import ProductDetails from "../components/ProductDetails";
import { request } from "graphql-request";
import {productDetailsQuery} from "../queries";
import {withRouter} from "react-router-dom";

class ProductDescriptionPage extends Component{
    state={
        product: null
    }

    componentDidMount(){
        const itemId = this.props.match.params.productId;

        request("http://localhost:4000/", productDetailsQuery(itemId))
        .then(
            ({product}) => this.setState({product: {...product, quantity: 1}})
        )
        .catch((err) => console.log(err))
    }

    render() {
        return(
            <>
                <div>
                    {this.state.product === null ? ( <div>A second please...</div>) : ( <ProductDetails product={this.state.product} /> )}
                </div>
            </>
        )
    }
}

export default withRouter(ProductDescriptionPage);