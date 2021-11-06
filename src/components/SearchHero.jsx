import { useEffect } from 'react'
import { UseSearchContext } from '../context/searchContext'
import axios from 'axios'

import { Formik, Form, Field, ErrorMessage} from 'formik'


import { useState } from 'react'
import Card from '../Card/Card'

import Container from 'react-bootstrap/Container'



const SearchHero = () => {
    /* const { getApi } = UseSearchContext() */
    const  [userSearch, setUserSearch] = useState("")



   /*  function handleSubmit(e){
        e.preventDefault()
    }

    const handleEnviar = (event) => {
        setUserSearch(event.target.value )
    }

    useEffect(() => {
        axios.get(`https://www.superheroapi.com/api.php/10226516722893407/search/${userSearch}/`)
        .then((response) => console.log(response.data.results) )
        .catch((error) => {
        console.log(error);
        })
    }, [userSearch]) */


    /* const getApi =  (userSearch)=> {
        axios.get(`https://superheroapi.com/api/4859376540747559/search/${userSearch}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    } */

    useEffect(() => {
        axios.get(`https://www.superheroapi.com/api.php/10226516722893407/search/${userSearch}/`)
        .then((response) => console.log(response.data.results) )
        .catch((error) => {
        console.log(error);
        })
    }, [userSearch])



    
    return (
        <>
            {/* <h2 className="text-center">Search your Hero</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" defaultValue={userSearch} onChange={handleEnviar} name="name" placeholder="Search your Hero" />
                <button>search</button>
            </form> */}


            <Formik
                initialValues ={{
                    searchHero:'',
                }}

                
                validate={(value) => {
                    
                    let errors = {}
                    if (value.searchHero === "") errors.searchHero = "empty";
                    return errors;
                }}
                
                onSubmit={async (value) =>  {
                    setUserSearch(value.searchHero)
                    }
                }


            >
                    <Form className="">
                        <Container className="d-flex flex-column align-items-center w-50">
                            <Field 
                                className="form-control mb-3 w-50"
                                id='searchHero'
                                name='searchHero'
                                
                            />
                            
                            
                            <button type='submit' className="btn btn-info w-25 mb-3">Search</button>
                        </Container>
                    </Form>
            </Formik>
            {/* <Card UserSearch={UserSearch}/> */}

            

        </>
    )
}

export default SearchHero
