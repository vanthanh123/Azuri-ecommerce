import React from "react";
import PropTypes from "prop-types";
import { useRef, useState, useEffect,useCallback } from "react";
import ProductCard from "../component/ProductCard";

const InfinityList = (props) => {
    const listRef = useRef(null);
    const perload = 4;
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setData(props.data.slice(0, perload));
        setIndex(1);
    }, [props.data]);

    const handleScroll = useCallback(() => {
        if (
            window.scrollY + window.innerHeight >
            listRef.current.clientHeight + listRef.current.offsetTop + 300
        ) {
            setLoad(true);
        }
    },[]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        const getItems = () => {
            const pages = Math.floor(props.data.length / perload);
            const maxIndex =
                props.data.length % perload === 0 ? pages : pages + 1;

            if (load===true && index <= maxIndex) {
                const start = perload * index;
                const end = start + perload;
                setData(data.concat(props.data.slice(start, end)));
                setIndex(index + 1);
                setLoad(false);
            }
        };
        getItems();
    }, [props.data, index, load, data]);

    return (
        <div ref={listRef}>
            <div className="row">
                {data.map((data, i) => (
                    <div key={i} className="col-lg-6 col-md-6 col-6">
                        <ProductCard data={data} />
                    </div>
                ))}
            </div>
        </div>
    );
};

InfinityList.propTypes = {
    data: PropTypes.array.isRequired,
};

export default InfinityList;
