module.exports = {
    mutation: `mutation UpdateVideo(
        $input: UpdateVideoInput!
        $condition: ModelVideoConditionInput
      ) {
        updateVideo(input: $input, condition: $condition) {
          id
          user {
            id
            createdAt
            updatedAt
            followerCount
            likesCount
            name
            description
            poolId
            following {
              nextToken
            }
            submittedVideos {
              nextToken
            }
            submittedStories {
              nextToken
            }
            hasSelectedCategories
            categories {
              id
              createdAt
              updatedAt
              title
              displayOrder
              imageThumbnailPath
              imageFullPath
            }
            imageThumbnailPath
            imageFullPath
            identityId
          }
          title
          description
          keywords
          createdAt
          updatedAt
          active
          imageThumbnailPath
          imageFullPath
          imageListPath
          videoFullPath
          videoPromoPath
          externalUrl
          duration
          likeCount
          nestablCount
          viewCount
          commentCount
          shareCount
          dislikeCount
        }
      }
    `
}