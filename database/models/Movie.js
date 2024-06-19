module.exports = function(sequelize, dataTypes) {

    let alias = 'Movie' // Nombre con el cual sequelize identificara el modelo.
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type:dataTypes.INTEGER,
        },
        title: {
            type:dataTypes.STRING,
        },
        rating: {
            type:dataTypes.DECIMAL,
        },
        awards:{
            type:dataTypes.INTEGER,
        },
        release_data:{
            type:dataTypes.DATE,
        },
        length:{
            type:dataTypes.INTEGER,
        },
        genre_id:{
            type:dataTypes.INTEGER,
        }
    }
    let config = {
        tableName: "Movies",
        timestamps: true, // Verifica si en la tabla estan los datos created_at y updated_at
        underscored: true, // Verifica si los nombres de los timestamps estan escritos con guion bajo
    }

    const Movie = sequelize.define(alias, cols, config)
    return Movie;
}