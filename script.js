window.addEventListener('load', function () {
    function removeMatchingPageFromRelatedPosts() {
      var currentPath = window.location.pathname;
      var matchingSummaryItem = document.querySelector(
        `[href="${currentPath}"]`
      );
      if (!matchingSummaryItem) return;
      var summaryParent = matchingSummaryItem.closest('.summary-item');
      summaryParent.remove();
      console.log('matching blog post removed');
      window.Squarespace.initializeLayoutBlocks(Y);
    }
    removeMatchingPageFromRelatedPosts();
  });
