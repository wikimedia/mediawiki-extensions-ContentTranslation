module.exports = {
  resolveSnapshotPath: (testPath, snapshotExtension) =>
    testPath.replace(/\.test\.([tj]s?)/, `${snapshotExtension}.$1`),
  resolveTestPath: (snapshotPath, snapshotExtension) =>
    snapshotPath.replace(snapshotExtension, ".test"),
  testPathForConsistencyCheck: "<path>/<test subject>.test.js"
};
