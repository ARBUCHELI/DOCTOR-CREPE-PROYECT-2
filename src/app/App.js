import React from 'react';

import { AllRecipes } from '../features/allRecipes/AllRecipes.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';
// Import the FavoriteRecipes component here.
import { FavoriteRecipes } from '../features/favoriteRecipes/FavoriteRecipes.js';

export function App(props) {
  const {state, dispatch} = props;

  const visibleAllRecipes = getFilteredRecipes(state.allRecipes, state.searchTerm);
  const visibleFavoriteRecipes = getFilteredRecipes(state.favoriteRecipes, state.searchTerm);

  // Render the <FavoriteRecipes /> component.
  // Pass `dispatch` and `favoriteRecipes` props.
  return (
    <main>
      <section style={{marginBottom: '3em'}}>
        <SearchTerm
          searchTerm={state.searchTerm}
          dispatch={dispatch}
        />
      </section>
      <section>
        <h2 style={{color: '#B22222', marginBottom: '1em'}}>Tus productos favoritos</h2>
        <FavoriteRecipes
          favoriteRecipes={visibleFavoriteRecipes}
          dispatch={dispatch}
        />
      </section>
      <hr />
      <section style={{marginTop: '3em', marginBottom: '3em'}}> 
        <h2>Nuestros Productos</h2>
        <AllRecipes
          allRecipes={visibleAllRecipes} 
          dispatch={dispatch}
        />
      </section>
      <div className="homecontent">
        <h1 id='h1-header2'>DOCTOR CREPE</h1>
        <p className='doctor-paragraph'>Crepes y Muffins preparados con una auténtica receta tradicional. Nos sentimos orgullosos de la calidad de nuestros productos, de nuestro amor por deleitar a nuestros clientes y de nuestro ambiente familiar.</p>
        </div>
      <div className="homecontent1">
        <h1 id='h1-header3'>QUIENES SOMOS</h1>
        <img id='quienes-somos' className="rounded-corners" style={{width: '250px', border: 'solid #D2B48C 3px', borderRadius: '10px', textAlign: 'center'}} 
      src="https://raw.githubusercontent.com/ARBUCHELI/DOCTOR-CREPE/master/images/annyandtomas.jpg"
      alt="new"
      />
        <p className='doctor-paragraph'>Somos los auténticos buscadores del Muffin perdido.  Hemos recorrido el mundo buscando la receta perfecta, desde Irlanda hasta Castilla La Mancha y desde Holanda hasta El Amazonas y finalmente lo encontramos y por eso decidimos regresar para deleitar a toda la comunidad con nuestros productos.</p>
        </div>
    </main>
  )
}

/* Utility Helpers */

function getFilteredRecipes(recipes, searchTerm) {
  return recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
}