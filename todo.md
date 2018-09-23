# TODO

---

## Create react app

* [X] Using the next branch! With the latest scripts (Webpack 4). Still in Alpha.
  * https://github.com/facebook/create-react-app/issues/3815

```sh
npx create-react-app@next --scripts-version=2.0.0-next.a671462c
```

* [X] Tour the app
  * [X] index.js
  * [X] App.js

---

## Setup eslint

* [X] Must install the version that react-scripts uses. (4.19.1 right now)
* [X] Using eslint-plugin-react and babel-eslint
  * https://github.com/yannickcr/eslint-plugin-react

```sh
yarn add --dev eslint@4.19.1 eslint-plugin-react babel-eslint
npx eslint --init
```

* [X] Update .eslintrc.js
  * [X] 2 space tab
  * [X] extend "plugin:react/recommended"
  * [X] "parser": "babel-eslint"
  * [X] Disable "jsx-a11y/heading-has-content"
    * https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/440

---

## Clean Up, Layout, Styles

* [X] Basic render function
* [X] Remove logo ⚛️, styles 💅, tests... 😱

```html
<header>
  <h1>BarkWire</h1>
</header>
<main id="app">
</main>
<footer>
  <small>&copy; Barkwire Inc.</small>
</footer>
```

* [X] Add styles in public/index.html

```html
<link rel="stylesheet" href="https://barkwire-style.now.sh/">
```

* [X] React.Fragment instead of div in App.js

---

## Components

* [X] Header
* [X] Footer

---

## Setup React Router

* [ ] Using React Router v4
  * https://reacttraining.com/react-router/web/guides/philosophy
  * https://www.npmjs.com/package/react-router-dom

```sh
yarn add react-router-dom
```

* [X] Wrap App in Router
* [X] Create Routes Component
  * [X] Switch
  * [ ] Not Found Route/Component

---

## As a lonely dog, I want to see a list of all of the dogs that are available so that I can see my dating options.

* [ ] Create DogsPage Container
* [ ] Add / route for DogsPage
* [ ] Link to / route in Header
* [ ] Setup state
* [ ] Show loading message in render
  * Loading Component - https://i.giphy.com/media/VFDeGtRSHswfe/giphy.mp4
* [ ] Call API in componentDidMount
  * [ ] create API getDogs
  * [ ] setState
* [ ] Show Dogs on Page

```html
<ul className="dogs">
</ul>
```

* [ ] Create DogList component
  * [ ] propTypes
    * https://www.npmjs.com/package/prop-types

```sh
yarn add prop-types
```

```js
DogList.propTypes = {
  dogs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageCaption: PropTypes.string.isRequired,
  })).isRequired
};
```

* Show dog info

```html
<section className="dog-listing">
  <Link to={`/dogs/${dog.id}`}>
    <h3 className="name">{dog.name}</h3>
    <section>
      <figure>
        <img src={dog.imageUrl} alt={dog.name} />
        <figcaption>{dog.imageCaption}</figcaption>
      </figure>
      <p>{dog.description}</p>
    </section>
  </Link>
</section>
```

## As a lonely dog, I want to be able to link to a specific dog so that I can share my favorite dogs with my friends.

* [ ] Create DogPage Container
* [ ] Add /dogs/:id route for DogPage
* [ ] Setup state
* [ ] Show loading message in render
* [ ] Call API in componentDidMount
  * [ ] Get id from params
  * [ ] create API getDog(id)
  * [ ] setState

```js
static propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
```

* [ ] Show Dog on Page
  * [ ] Extract Dog Component from DogList
    * [ ] PropTypes

## STRETCH!

* Context API
  * https://reactjs.org/docs/context.html
* Create context
* Create Provider
  * Move all state to provider
  * Move all setState to provider

```js
<AppContext.Provider value={{
  ...this.state,
  clearDog: this.clearDog,
  clearDogs: this.clearDogs,
  getDog: this.getDog,
  getDogs: this.getDogs,
}}>
  {this.props.children}
</AppContext.Provider>
```

* Create withConsumer Higher Order Component

```js
function withConsumer(Component) {
  return function WrappedComponent(props) {
    return (
      <AppContext.Consumer>   
        {value => <Component {...props} {...value} />}   
      </AppContext.Consumer>
    );
  };
}
```

* Add Provider to index.js
* Update containers to be withConsumer