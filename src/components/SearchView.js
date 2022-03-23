import Hero from './Hero';


const SearchView = ({ keyword, searchResult }) => {
    const title = `You are searching for ${keyword}`
    //console.log(keyword)
    //console.log(searchResult, "are the search results")
    return(
        <>
        <Hero text={title} />
            
        </>
    )
  }

  export default SearchView