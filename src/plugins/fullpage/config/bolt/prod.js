configure({
  sources: [
    source('amd', 'tinymce.plugins.fullpage', '../../src/main/js', function (id) {
      return mapper.hierarchical(id).replace(/^tinymce\/plugins\/fullpage\//, '');
    })
  ]
});