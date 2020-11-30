<html>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="initial-scale=1,maximum-scale=1,user-scalable=no"
    />
    <!--
  ArcGIS API for JavaScript, https://js.arcgis.com
  For more information about the layers-imagery-renderer sample, read the original sample description at developers.arcgis.com.
  https://developers.arcgis.com/javascript/latest/sample-code/layers-imagery-renderer/index.html
  -->
<title>
      ImageryTileLayer - shaded relief renderer | Sample | ArcGIS API for
      JavaScript 4.17
    </title>

    <link
      rel="stylesheet"
      href="https://js.arcgis.com/4.17/esri/themes/light/main.css"
    />
    <script src="https://js.arcgis.com/4.17/"></script>

    <style>
      html,
      body,
      #viewDiv {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
      }

      #rendererDiv {
        padding: 10px;
        width: 280px;
      }

      .slider {
        height: 40px;
        width: 100%;
      }
    </style>

    <script>
      require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/ImageryTileLayer",
        "esri/renderers/RasterShadedReliefRenderer",
        "esri/widgets/Slider",
        "esri/widgets/Expand",
        "esri/tasks/support/MultipartColorRamp"
      ], function (
        Map,
        MapView,
        ImageryTileLayer,
        RasterShadedReliefRenderer,
        Slider,
        Expand,
        MultipartColorRamp
      ) {
        // set the hillshade type for the shaded relief renderer
        let hillshadeType = "traditional";
        const url =
          "https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer";

        // create a colorRamp
        const colorRamp = MultipartColorRamp.fromJSON({
          type: "multipart",
          colorRamps: [
            {
              fromColor: [175, 240, 233],
              toColor: [255, 255, 179]
            },
            {
              fromColor: [255, 255, 179],
              toColor: [0, 128, 64]
            },
            {
              fromColor: [0, 128, 64],
              toColor: [252, 186, 3]
            },
            {
              fromColor: [252, 186, 3],
              toColor: [128, 0, 0]
            },
            {
              fromColor: [120, 0, 0],
              toColor: [105, 48, 13]
            },
            {
              fromColor: [105, 48, 13],
              toColor: [171, 171, 171]
            },
            {
              fromColor: [171, 171, 171],
              toColor: [255, 252, 255]
            }
          ]
        });

        // set the shaded relief renderer parameters
        const renderer = new RasterShadedReliefRenderer({
          altitude: 45,
          azimuth: 315,
          hillshadeType: hillshadeType,
          zFactor: 1,