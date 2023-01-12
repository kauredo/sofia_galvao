class CreateListingTitleAndDescriptionAndStatusAndFeaturesTranslationsForMobilityTableBackend < ActiveRecord::Migration[7.0]
  def change
    create_table :listing_translations do |t|

      # Translated attribute(s)
      t.string :title
      t.text :description
      t.string :status
      t.string :features, array: true, default: []

      t.string  :locale, null: false
      t.references :listing, null: false, foreign_key: true, index: false

      t.timestamps null: false
    end

    add_index :listing_translations, :locale, name: :index_listing_translations_on_locale
    add_index :listing_translations, [:listing_id, :locale], name: :index_listing_translations_on_listing_id_and_locale, unique: true

  end
end
