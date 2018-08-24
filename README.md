# NEIGHBORHOOD MAP IN REACT

This is the final project for the Front End Nanodegree program by Udacity

### What does this app do

- This is a neighbourhood map of Odense Denmark and it displays kindergartens (bornehaver) around the area I live
- The map displays markers, with the exact locations of the kindergartens. When you click on these markers, a small window pops up with further information about the location
- If you click on the burger menu on the left, there appears a list of these locations which are clickable and display the same information window that you get when clicking on a marker
- There is filter box on top of the list which can be used to filter the list by entering text queries. Filtering a list will also filter the markers
- You can view this application in your browser or on a mobile device

### Getting Started

- Clone the repo
- Run `npm install` in your terminal from the project root directory
- Then run `npm start`
- The application will open in your browser at the address: localhost:3000

### Dependencies

- React Bootstrap: [https://react-bootstrap.github.io/getting-started/introduction/]
- create-react-app
- react-google-maps
- react-burger-menu
- Google Maps API
- FourSquare API
- Axios
- npm

### React hierarchy

The hierarchy of the application is: 

```
<App />
--- <Map />
--- <ListView />
```

- Locations are fetched inside <App />
- The Map, Markers and infoWindow are in <Map />
- The list of locations displayed is in <ListView />

### Credits

- https://www.youtube.com/watch?v=MEzcDiA6shM&t=548s
- https://www.youtube.com/watch?v=RM_nXOyHwN0
- Eman
- Udacity
