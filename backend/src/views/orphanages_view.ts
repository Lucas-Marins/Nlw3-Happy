import Orphanage from '../model/Orphanage'
import imagesView from '../views/Images.view'

export default{
    render(orphanage:Orphanage){
        return {
            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitute,
            about:  orphanage.about,
            instructions:   orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            opening_on_weekends: orphanage.open_on_weekends,
            images: imagesView.renderMany(orphanage.images)
        }
    },

    renderMany(orphanages: Orphanage[]){
        return orphanages.map(orphanage => this.render(orphanage))
    }
}