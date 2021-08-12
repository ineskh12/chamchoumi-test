import React, { useState, useEffect } from 'react';
import {useRoutes, A} from 'hookrouter';

import Search from '../components/SearchBar';
import MoviesGrid from '../components/GridItems';

import Get from '../api/listApi';
import Constants from '../utils/Constants';
import useSearch from '../hooks/useSearch';
import Popup from "./Popup";
import routes from "../utils/Routes";

Constants.FuseOptions.keys = ['title', 'release_date'];

function Home() {
   const routeResult = useRoutes(routes);
    const [movies, setMovies] = useState({});
    const [movieType, setMovieType] = useState();
    const [state, setState] = useState({
        s: "",
        results: [],
        selected: {}
    });

    useEffect(() => {
        try {
            (async () => {
                const popularMovies = await Get.movies('now_playing');
                setMovies(state => {
                    const newState = { ...state };
                    newState.now_playing = popularMovies.data.results;
                    return newState;
                });
                setMovieType('now_playing');
            })();
        } catch (e) {
            console.log({ e });
        }
    }, []);

    const fetch = async what => {
        const split = what.split(' ');
        const type = split.reduce((acc, curr, i) => {
            return acc
                .concat(curr.toLowerCase())
                .concat(i !== split.length - 1 ? '_' : '');
        }, '');
        if (!movies[type]) {
            const fetchedMovies = await Get.movies(type);
            setMovies(state => {
                const newState = { ...state };
                newState[type] = fetchedMovies.data.results;
                return newState;
            });
        }
        setMovieType(type);
    };

    const openPopup = id => {
        Get.movies(id).then(({ data }) => {
            let result = data;

            console.log(result);

            setState(prevState => {
                return { ...prevState, selected: result }
            });
        });
    };

    const closePopup = () => {
        setState(prevState => {
            return { ...prevState, selected: {} }
        });
    };

    const { results, search, searchTerm } = useSearch({
        data: movies[movieType],
        options: Constants.FuseOptions
    });

    const sortByTitle = () => {
        const sorted = [...results].slice().sort((a, b) => a.title.localeCompare(b.title));
        setMovies(state => {
            const newState = { ...state };
            newState.sorted = sorted;
            return newState;
        });
        setMovieType('sorted');
    };
    const sortArray = (type) =>  {
        if (type !== "all") {
            try {
                (async () => {
                    const popularMovies = await Get.moviesWithParams('&with_genres=' + type);
                    console.log(popularMovies);
                    setMovies(state => {
                        const newState = { ...state };
                        newState.genre = popularMovies.data.results;
                        return newState;
                    });
                    setMovieType('genre');
                })();
            } catch (e) {
                console.log({ e });
            }
        }
    };

    return (
        <div className="main-section">

            {(typeof state.selected.title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
            <section className={typeof state.selected.title != "undefined" ? "content-section opacity-1" : "content-section"}>
                <div className="d-flex flex-row justify-content-between ">
                    <img className="logo" src={process.env.PUBLIC_URL + 'logo.png'} alt="scan"/>
                    <section className="search-bar-section">
                        <Search handler={e => search(e.target.value)} value={searchTerm} />
                    </section>

                    <div className="d-flex flex-row">
                        <div className="cursor-pointer pt-4 mr-3" onClick={() => sortByTitle()}>
                            <i className="cursor-pointer fa fa-sort-alpha-asc"></i>
                        </div>
                        <select className="m-4 form-select" onChange={(e) => sortArray(e.target.value)}>
                            <option value="all">All genre</option>
                            <option value="28">Action</option>
                            <option value="35">Comedy</option>
                            <option value="12">Adventure</option>
                            <option value="16">Animation</option>
                            <option value="80">Crime</option>
                            <option value="99">Documentary</option>
                            <option value="18">Drama</option>
                            <option value="10751">Family</option>
                            <option value="14">Fantasy</option>
                            <option value="36">History</option>
                            <option value="27">Horror</option>
                            <option value="10402">Music</option>
                            <option value="9648">Mystery</option>
                            <option value="10749">Romance</option>
                        </select>
                        
                        <div className="pt-4 mr-3">
                     
                            <A href="/login">Login</A>
                        
                        </div>
                    </div>
                </div>
                <section className="d-flex flex-column list-grid-section">
                    <MoviesGrid items={results} openPopup={openPopup} />
                </section>
            </section>
         
         
        </div>
    );
}

export default Home;
