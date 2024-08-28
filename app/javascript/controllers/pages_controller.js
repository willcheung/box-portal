import { Controller } from "@hotwired/stimulus"

var configData = {
    // NOTE
    ACCESS_TOKEN: "pe27b2IArlBu8cKVV1HiE9mCgWxLmrla",
    FOLDER_ID: '269613040067',
    MD_FIELDS_TO_SHOW: [
      { key: 'metadata.enterprise_863790356.samsung.product', canEdit: false },
      { key: 'metadata.enterprise_863790356.samsung.model', canEdit: false },
      { key: 'metadata.enterprise_863790356.samsung.year', canEdit: false },
      { key: 'metadata.enterprise_863790356.samsung.language', canEdit: false },
    ]
}

const metadataQuery = {

    // Filter items in the folder by existing metadata key
    query: "language = :language",

    // Display items with value
    query_params: { language: "English" },

    // Define the ancestor folder ID
    ancestor_folder_id: 269613040067,

    // Define which other metadata fields you'd like to display
    fields:[
      'metadata.enterprise_863790356.samsung.product',
      'metadata.enterprise_863790356.samsung.model',
      'metadata.enterprise_863790356.samsung.year',
      'metadata.enterprise_863790356.samsung.language',
    ]
  }

var contentExplorer = new Box.ContentExplorer();

// Show the content explorer
contentExplorer.show(configData.FOLDER_ID, configData.ACCESS_TOKEN, {
    container: '.content-explorer',
    contentPreviewProps: {
        contentSidebarProps: {
            detailsSidebarProps: {
                hasNotices: true,
                hasProperties: true,
                hasAccessStats: true,
                hasVersions: true
            },
            hasActivityFeed: true,
            hasSkills: true,
            hasClassification: true,
            hasRetentionPolicy: true
        }
    },
    logoUrl: "https://www.nintendo.com/eu/media/images/10_share_images/portals_3/2x1_SuperMarioHub_image1600w.jpg"
    //adding the metadata view options
    
});