<!DOCTYPE html>
<head>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-tsne"></script>
</head>
<body>

</body>
<script>
  //const data = tf.tensor([1, 2, 3, 4],"int32").print();
    //dataArr = dataArr.sort();
const data = tf.randomUniform([2, 2]);
// Get a tsne optimizer
    const tsneOpt = tsne.tsne();

// Compute a T-SNE embedding, returns a promise.
// Runs for 1000 iterations by default.
    tsneOpt.compute().then(() => {
  // tsne.coordinate returns a *tensor* with x, y coordinates of
  // the embedded data.
  const coordinates = tsneOpt.coordinates();
  coordinates.print();
}) ;
</script>