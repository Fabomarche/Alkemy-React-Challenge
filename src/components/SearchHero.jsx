import { useEffect } from 'react'
import { UseSearchContext } from '../context/searchContext'
import axios from 'axios'

import { Formik, Form, Field, ErrorMessage} from 'formik'

import Container from 'react-bootstrap/Container'

const SearchHero = () => {
    const { userSearch, setUserSearch, setHeroSearched  } = UseSearchContext()

    useEffect(() => {
        axios.get(`https://www.superheroapi.com/api.php/4859376540747559/search/${userSearch}/`)
        .then((response) => setHeroSearched(response.data.results) )
        .catch((error) => {
        console.log(error);
        })
    }, [userSearch])


    return (
        <Container className="text-center pt-4">
            <h2>Find your Hero</h2>
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
                    <Form>
                        <Container className="d-flex flex-row justify-content-center w-50">
                            <Field 
                                className="form-control mb-3 w-50"
                                id='searchHero'
                                name='searchHero'
                                
                            />
                            
                            
                            <button type='submit' className="btn btn-info w-25 mb-3">Search</button>
                        </Container>
                    </Form>
            </Formik>
        </Container>
    )
}

export default SearchHero
