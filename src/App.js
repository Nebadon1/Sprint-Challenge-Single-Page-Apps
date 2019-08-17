import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter.js";
import SearchForm from "./components/SearchForm.js"

//**********************************************************
                 //testing components
//********************************************************** 
// import CharacterList from "./components/CharacterList.js";
// import LocationsList from "./components/LocationsList.js";
// import EpisodesList from "./components/EpisodesList.js";




export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <AppRouter />
      <SearchForm/>
      {/* <CharacterList/> */}
      {/* <LocationsList/> */}
      {/* <EpisodesList/> */}
    </main>
  );
}
