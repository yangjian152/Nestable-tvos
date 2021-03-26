/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const generateThumbnail = /* GraphQL */ `
  mutation GenerateThumbnail($id: ID) {
    generateThumbnail(id: $id)
  }
`;
export const createVideo = /* GraphQL */ `
  mutation CreateVideo(
    $input: CreateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    createVideo(input: $input, condition: $condition) {
      id
      user {
        id
        email
        createdAt
        updatedAt
        followerCount
        followingCount
        likesCount
        viewsCount
        name
        description
        poolId
        following {
          items {
            id
            followingUserFollowedUserId
            followingUserFollowingUserId
            createdAt
            updatedAt
          }
          nextToken
        }
        submittedVideos {
          items {
            id
            videoUserId
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
          nextToken
        }
        submittedStories {
          items {
            id
            title
            description
            createdAt
            updatedAt
            active
            imageThumbnailPath
            imageFullPath
            imageListPath
            duration
            likeCount
            nestablCount
            viewCount
            commentCount
            shareCount
            dislikeCount
          }
          nextToken
        }
        hasSelectedCategories
        categories {
          id
          title
          displayOrder
          imageThumbnailPath
          imageFullPath
          createdAt
          updatedAt
        }
        identityId
        avatarPath
        backgroundVideoPath
        website
        bio
      }
      videoUserId
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
      categories {
        items {
          id
          video {
            id
            videoUserId
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
          videoCategoriesVideoId
          category {
            id
            title
            displayOrder
            imageThumbnailPath
            imageFullPath
            createdAt
            updatedAt
          }
          videoCategoriesCategoryId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateVideo = /* GraphQL */ `
  mutation UpdateVideo(
    $input: UpdateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    updateVideo(input: $input, condition: $condition) {
      id
      user {
        id
        email
        createdAt
        updatedAt
        followerCount
        followingCount
        likesCount
        viewsCount
        name
        description
        poolId
        following {
          items {
            id
            followingUserFollowedUserId
            followingUserFollowingUserId
            createdAt
            updatedAt
          }
          nextToken
        }
        submittedVideos {
          items {
            id
            videoUserId
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
          nextToken
        }
        submittedStories {
          items {
            id
            title
            description
            createdAt
            updatedAt
            active
            imageThumbnailPath
            imageFullPath
            imageListPath
            duration
            likeCount
            nestablCount
            viewCount
            commentCount
            shareCount
            dislikeCount
          }
          nextToken
        }
        hasSelectedCategories
        categories {
          id
          title
          displayOrder
          imageThumbnailPath
          imageFullPath
          createdAt
          updatedAt
        }
        identityId
        avatarPath
        backgroundVideoPath
        website
        bio
      }
      videoUserId
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
      categories {
        items {
          id
          video {
            id
            videoUserId
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
          videoCategoriesVideoId
          category {
            id
            title
            displayOrder
            imageThumbnailPath
            imageFullPath
            createdAt
            updatedAt
          }
          videoCategoriesCategoryId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteVideo = /* GraphQL */ `
  mutation DeleteVideo(
    $input: DeleteVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    deleteVideo(input: $input, condition: $condition) {
      id
      user {
        id
        email
        createdAt
        updatedAt
        followerCount
        followingCount
        likesCount
        viewsCount
        name
        description
        poolId
        following {
          items {
            id
            followingUserFollowedUserId
            followingUserFollowingUserId
            createdAt
            updatedAt
          }
          nextToken
        }
        submittedVideos {
          items {
            id
            videoUserId
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
          nextToken
        }
        submittedStories {
          items {
            id
            title
            description
            createdAt
            updatedAt
            active
            imageThumbnailPath
            imageFullPath
            imageListPath
            duration
            likeCount
            nestablCount
            viewCount
            commentCount
            shareCount
            dislikeCount
          }
          nextToken
        }
        hasSelectedCategories
        categories {
          id
          title
          displayOrder
          imageThumbnailPath
          imageFullPath
          createdAt
          updatedAt
        }
        identityId
        avatarPath
        backgroundVideoPath
        website
        bio
      }
      videoUserId
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
      categories {
        items {
          id
          video {
            id
            videoUserId
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
          videoCategoriesVideoId
          category {
            id
            title
            displayOrder
            imageThumbnailPath
            imageFullPath
            createdAt
            updatedAt
          }
          videoCategoriesCategoryId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createLikedVideo = /* GraphQL */ `
  mutation CreateLikedVideo(
    $input: CreateLikedVideoInput!
    $condition: ModelLikedVideoConditionInput
  ) {
    createLikedVideo(input: $input, condition: $condition) {
      id
      likedVideoUserId
      user {
        id
        email
        createdAt
        updatedAt
        followerCount
        followingCount
        likesCount
        viewsCount
        name
        description
        poolId
        following {
          items {
            id
            followingUserFollowedUserId
            followingUserFollowingUserId
            createdAt
            updatedAt
          }
          nextToken
        }
        submittedVideos {
          items {
            id
            videoUserId
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
          nextToken
        }
        submittedStories {
          items {
            id
            title
            description
            createdAt
            updatedAt
            active
            imageThumbnailPath
            imageFullPath
            imageListPath
            duration
            likeCount
            nestablCount
            viewCount
            commentCount
            shareCount
            dislikeCount
          }
          nextToken
        }
        hasSelectedCategories
        categories {
          id
          title
          displayOrder
          imageThumbnailPath
          imageFullPath
          createdAt
          updatedAt
        }
        identityId
        avatarPath
        backgroundVideoPath
        website
        bio
      }
      likedVideoVideoId
      video {
        id
        user {
          id
          email
          createdAt
          updatedAt
          followerCount
          followingCount
          likesCount
          viewsCount
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
            title
            displayOrder
            imageThumbnailPath
            imageFullPath
            createdAt
            updatedAt
          }
          identityId
          avatarPath
          backgroundVideoPath
          website
          bio
        }
        videoUserId
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
        categories {
          items {
            id
            videoCategoriesVideoId
            videoCategoriesCategoryId
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLikedVideo = /* GraphQL */ `
  mutation UpdateLikedVideo(
    $input: UpdateLikedVideoInput!
    $condition: ModelLikedVideoConditionInput
  ) {
    updateLikedVideo(input: $input, condition: $condition) {
      id
      likedVideoUserId
      user {
        id
        email
        createdAt
        updatedAt
        followerCount
        followingCount
        likesCount
        viewsCount
        name
        description
        poolId
        following {
          items {
            id
            followingUserFollowedUserId
            followingUserFollowingUserId
            createdAt
            updatedAt
          }
          nextToken
        }
        submittedVideos {
          items {
            id
            videoUserId
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
          nextToken
        }
        submittedStories {
          items {
            id
            title
            description
            createdAt
            updatedAt
            active
            imageThumbnailPath
            imageFullPath
            imageListPath
            duration
            likeCount
            nestablCount
            viewCount
            commentCount
            shareCount
            dislikeCount
          }
          nextToken
        }
        hasSelectedCategories
        categories {
          id
          title
          displayOrder
          imageThumbnailPath
          imageFullPath
          createdAt
          updatedAt
        }
        identityId
        avatarPath
        backgroundVideoPath
        website
        bio
      }
      likedVideoVideoId
      video {
        id
        user {
          id
          email
          createdAt
          updatedAt
          followerCount
          followingCount
          likesCount
          viewsCount
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
            title
            displayOrder
            imageThumbnailPath
            imageFullPath
            createdAt
            updatedAt
          }
          identityId
          avatarPath
          backgroundVideoPath
          website
          bio
        }
        videoUserId
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
        categories {
          items {
            id
            videoCategoriesVideoId
            videoCategoriesCategoryId
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLikedVideo = /* GraphQL */ `
  mutation DeleteLikedVideo(
    $input: DeleteLikedVideoInput!
    $condition: ModelLikedVideoConditionInput
  ) {
    deleteLikedVideo(input: $input, condition: $condition) {
      id
      likedVideoUserId
      user {
        id
        email
        createdAt
        updatedAt
        followerCount
        followingCount
        likesCount
        viewsCount
        name
        description
        poolId
        following {
          items {
            id
            followingUserFollowedUserId
            followingUserFollowingUserId
            createdAt
            updatedAt
          }
          nextToken
        }
        submittedVideos {
          items {
            id
            videoUserId
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
          nextToken
        }
        submittedStories {
          items {
            id
            title
            description
            createdAt
            updatedAt
            active
            imageThumbnailPath
            imageFullPath
            imageListPath
            duration
            likeCount
            nestablCount
            viewCount
            commentCount
            shareCount
            dislikeCount
          }
          nextToken
        }
        hasSelectedCategories
        categories {
          id
          title
          displayOrder
          imageThumbnailPath
          imageFullPath
          createdAt
          updatedAt
        }
        identityId
        avatarPath
        backgroundVideoPath
        website
        bio
      }
      likedVideoVideoId
      video {
        id
        user {
          id
          email
          createdAt
          updatedAt
          followerCount
          followingCount
          likesCount
          viewsCount
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
            title
            displayOrder
            imageThumbnailPath
            imageFullPath
            createdAt
            updatedAt
          }
          identityId
          avatarPath
          backgroundVideoPath
          website
          bio
        }
        videoUserId
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
        categories {
          items {
            id
            videoCategoriesVideoId
            videoCategoriesCategoryId
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const createVideoCategories = /* GraphQL */ `
  mutation CreateVideoCategories(
    $input: CreateVideoCategoriesInput!
    $condition: ModelVideoCategoriesConditionInput
  ) {
    createVideoCategories(input: $input, condition: $condition) {
      id
      video {
        id
        user {
          id
          email
          createdAt
          updatedAt
          followerCount
          followingCount
          likesCount
          viewsCount
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
            title
            displayOrder
            imageThumbnailPath
            imageFullPath
            createdAt
            updatedAt
          }
          identityId
          avatarPath
          backgroundVideoPath
          website
          bio
        }
        videoUserId
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
        categories {
          items {
            id
            videoCategoriesVideoId
            videoCategoriesCategoryId
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      videoCategoriesVideoId
      category {
        id
        title
        displayOrder
        imageThumbnailPath
        imageFullPath
        createdAt
        updatedAt
      }
      videoCategoriesCategoryId
      createdAt
      updatedAt
    }
  }
`;
export const updateVideoCategories = /* GraphQL */ `
  mutation UpdateVideoCategories(
    $input: UpdateVideoCategoriesInput!
    $condition: ModelVideoCategoriesConditionInput
  ) {
    updateVideoCategories(input: $input, condition: $condition) {
      id
      video {
        id
        user {
          id
          email
          createdAt
          updatedAt
          followerCount
          followingCount
          likesCount
          viewsCount
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
            title
            displayOrder
            imageThumbnailPath
            imageFullPath
            createdAt
            updatedAt
          }
          identityId
          avatarPath
          backgroundVideoPath
          website
          bio
        }
        videoUserId
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
        categories {
          items {
            id
            videoCategoriesVideoId
            videoCategoriesCategoryId
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      videoCategoriesVideoId
      category {
        id
        title
        displayOrder
        imageThumbnailPath
        imageFullPath
        createdAt
        updatedAt
      }
      videoCategoriesCategoryId
      createdAt
      updatedAt
    }
  }
`;
export const deleteVideoCategories = /* GraphQL */ `
  mutation DeleteVideoCategories(
    $input: DeleteVideoCategoriesInput!
    $condition: ModelVideoCategoriesConditionInput
  ) {
    deleteVideoCategories(input: $input, condition: $condition) {
      id
      video {
        id
        user {
          id
          email
          createdAt
          updatedAt
          followerCount
          followingCount
          likesCount
          viewsCount
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
            title
            displayOrder
            imageThumbnailPath
            imageFullPath
            createdAt
            updatedAt
          }
          identityId
          avatarPath
          backgroundVideoPath
          website
          bio
        }
        videoUserId
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
        categories {
          items {
            id
            videoCategoriesVideoId
            videoCategoriesCategoryId
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      videoCategoriesVideoId
      category {
        id
        title
        displayOrder
        imageThumbnailPath
        imageFullPath
        createdAt
        updatedAt
      }
      videoCategoriesCategoryId
      createdAt
      updatedAt
    }
  }
`;
export const createFeed = /* GraphQL */ `
  mutation CreateFeed(
    $input: CreateFeedInput!
    $condition: ModelFeedConditionInput
  ) {
    createFeed(input: $input, condition: $condition) {
      id
      item {
        id
        user {
          id
          email
          createdAt
          updatedAt
          followerCount
          followingCount
          likesCount
          viewsCount
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
            title
            displayOrder
            imageThumbnailPath
            imageFullPath
            createdAt
            updatedAt
          }
          identityId
          avatarPath
          backgroundVideoPath
          website
          bio
        }
        videoUserId
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
        categories {
          items {
            id
            videoCategoriesVideoId
            videoCategoriesCategoryId
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      displayOrder
    }
  }
`;
export const updateFeed = /* GraphQL */ `
  mutation UpdateFeed(
    $input: UpdateFeedInput!
    $condition: ModelFeedConditionInput
  ) {
    updateFeed(input: $input, condition: $condition) {
      id
      item {
        id
        user {
          id
          email
          createdAt
          updatedAt
          followerCount
          followingCount
          likesCount
          viewsCount
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
            title
            displayOrder
            imageThumbnailPath
            imageFullPath
            createdAt
            updatedAt
          }
          identityId
          avatarPath
          backgroundVideoPath
          website
          bio
        }
        videoUserId
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
        categories {
          items {
            id
            videoCategoriesVideoId
            videoCategoriesCategoryId
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      displayOrder
    }
  }
`;
export const deleteFeed = /* GraphQL */ `
  mutation DeleteFeed(
    $input: DeleteFeedInput!
    $condition: ModelFeedConditionInput
  ) {
    deleteFeed(input: $input, condition: $condition) {
      id
      item {
        id
        user {
          id
          email
          createdAt
          updatedAt
          followerCount
          followingCount
          likesCount
          viewsCount
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
            title
            displayOrder
            imageThumbnailPath
            imageFullPath
            createdAt
            updatedAt
          }
          identityId
          avatarPath
          backgroundVideoPath
          website
          bio
        }
        videoUserId
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
        categories {
          items {
            id
            videoCategoriesVideoId
            videoCategoriesCategoryId
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      displayOrder
    }
  }
`;
export const createStory = /* GraphQL */ `
  mutation CreateStory(
    $input: CreateStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    createStory(input: $input, condition: $condition) {
      id
      user {
        id
        email
        createdAt
        updatedAt
        followerCount
        followingCount
        likesCount
        viewsCount
        name
        description
        poolId
        following {
          items {
            id
            followingUserFollowedUserId
            followingUserFollowingUserId
            createdAt
            updatedAt
          }
          nextToken
        }
        submittedVideos {
          items {
            id
            videoUserId
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
          nextToken
        }
        submittedStories {
          items {
            id
            title
            description
            createdAt
            updatedAt
            active
            imageThumbnailPath
            imageFullPath
            imageListPath
            duration
            likeCount
            nestablCount
            viewCount
            commentCount
            shareCount
            dislikeCount
          }
          nextToken
        }
        hasSelectedCategories
        categories {
          id
          title
          displayOrder
          imageThumbnailPath
          imageFullPath
          createdAt
          updatedAt
        }
        identityId
        avatarPath
        backgroundVideoPath
        website
        bio
      }
      title
      description
      createdAt
      updatedAt
      active
      imageThumbnailPath
      imageFullPath
      imageListPath
      duration
      likeCount
      nestablCount
      viewCount
      commentCount
      shareCount
      dislikeCount
    }
  }
`;
export const updateStory = /* GraphQL */ `
  mutation UpdateStory(
    $input: UpdateStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    updateStory(input: $input, condition: $condition) {
      id
      user {
        id
        email
        createdAt
        updatedAt
        followerCount
        followingCount
        likesCount
        viewsCount
        name
        description
        poolId
        following {
          items {
            id
            followingUserFollowedUserId
            followingUserFollowingUserId
            createdAt
            updatedAt
          }
          nextToken
        }
        submittedVideos {
          items {
            id
            videoUserId
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
          nextToken
        }
        submittedStories {
          items {
            id
            title
            description
            createdAt
            updatedAt
            active
            imageThumbnailPath
            imageFullPath
            imageListPath
            duration
            likeCount
            nestablCount
            viewCount
            commentCount
            shareCount
            dislikeCount
          }
          nextToken
        }
        hasSelectedCategories
        categories {
          id
          title
          displayOrder
          imageThumbnailPath
          imageFullPath
          createdAt
          updatedAt
        }
        identityId
        avatarPath
        backgroundVideoPath
        website
        bio
      }
      title
      description
      createdAt
      updatedAt
      active
      imageThumbnailPath
      imageFullPath
      imageListPath
      duration
      likeCount
      nestablCount
      viewCount
      commentCount
      shareCount
      dislikeCount
    }
  }
`;
export const deleteStory = /* GraphQL */ `
  mutation DeleteStory(
    $input: DeleteStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    deleteStory(input: $input, condition: $condition) {
      id
      user {
        id
        email
        createdAt
        updatedAt
        followerCount
        followingCount
        likesCount
        viewsCount
        name
        description
        poolId
        following {
          items {
            id
            followingUserFollowedUserId
            followingUserFollowingUserId
            createdAt
            updatedAt
          }
          nextToken
        }
        submittedVideos {
          items {
            id
            videoUserId
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
          nextToken
        }
        submittedStories {
          items {
            id
            title
            description
            createdAt
            updatedAt
            active
            imageThumbnailPath
            imageFullPath
            imageListPath
            duration
            likeCount
            nestablCount
            viewCount
            commentCount
            shareCount
            dislikeCount
          }
          nextToken
        }
        hasSelectedCategories
        categories {
          id
          title
          displayOrder
          imageThumbnailPath
          imageFullPath
          createdAt
          updatedAt
        }
        identityId
        avatarPath
        backgroundVideoPath
        website
        bio
      }
      title
      description
      createdAt
      updatedAt
      active
      imageThumbnailPath
      imageFullPath
      imageListPath
      duration
      likeCount
      nestablCount
      viewCount
      commentCount
      shareCount
      dislikeCount
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      title
      displayOrder
      imageThumbnailPath
      imageFullPath
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      title
      displayOrder
      imageThumbnailPath
      imageFullPath
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      title
      displayOrder
      imageThumbnailPath
      imageFullPath
      createdAt
      updatedAt
    }
  }
`;
export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
      followerCount
      followingCount
      likesCount
      viewsCount
      name
      description
      poolId
      following {
        items {
          id
          followedUser {
            id
            email
            createdAt
            updatedAt
            followerCount
            followingCount
            likesCount
            viewsCount
            name
            description
            poolId
            hasSelectedCategories
            identityId
            avatarPath
            backgroundVideoPath
            website
            bio
          }
          followingUserFollowedUserId
          followingUser {
            id
            email
            createdAt
            updatedAt
            followerCount
            followingCount
            likesCount
            viewsCount
            name
            description
            poolId
            hasSelectedCategories
            identityId
            avatarPath
            backgroundVideoPath
            website
            bio
          }
          followingUserFollowingUserId
          createdAt
          updatedAt
        }
        nextToken
      }
      submittedVideos {
        items {
          id
          user {
            id
            email
            createdAt
            updatedAt
            followerCount
            followingCount
            likesCount
            viewsCount
            name
            description
            poolId
            hasSelectedCategories
            identityId
            avatarPath
            backgroundVideoPath
            website
            bio
          }
          videoUserId
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
          categories {
            nextToken
          }
        }
        nextToken
      }
      submittedStories {
        items {
          id
          user {
            id
            email
            createdAt
            updatedAt
            followerCount
            followingCount
            likesCount
            viewsCount
            name
            description
            poolId
            hasSelectedCategories
            identityId
            avatarPath
            backgroundVideoPath
            website
            bio
          }
          title
          description
          createdAt
          updatedAt
          active
          imageThumbnailPath
          imageFullPath
          imageListPath
          duration
          likeCount
          nestablCount
          viewCount
          commentCount
          shareCount
          dislikeCount
        }
        nextToken
      }
      hasSelectedCategories
      categories {
        id
        title
        displayOrder
        imageThumbnailPath
        imageFullPath
        createdAt
        updatedAt
      }
      identityId
      avatarPath
      backgroundVideoPath
      website
      bio
    }
  }
`;
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
      followerCount
      followingCount
      likesCount
      viewsCount
      name
      description
      poolId
      following {
        items {
          id
          followedUser {
            id
            email
            createdAt
            updatedAt
            followerCount
            followingCount
            likesCount
            viewsCount
            name
            description
            poolId
            hasSelectedCategories
            identityId
            avatarPath
            backgroundVideoPath
            website
            bio
          }
          followingUserFollowedUserId
          followingUser {
            id
            email
            createdAt
            updatedAt
            followerCount
            followingCount
            likesCount
            viewsCount
            name
            description
            poolId
            hasSelectedCategories
            identityId
            avatarPath
            backgroundVideoPath
            website
            bio
          }
          followingUserFollowingUserId
          createdAt
          updatedAt
        }
        nextToken
      }
      submittedVideos {
        items {
          id
          user {
            id
            email
            createdAt
            updatedAt
            followerCount
            followingCount
            likesCount
            viewsCount
            name
            description
            poolId
            hasSelectedCategories
            identityId
            avatarPath
            backgroundVideoPath
            website
            bio
          }
          videoUserId
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
          categories {
            nextToken
          }
        }
        nextToken
      }
      submittedStories {
        items {
          id
          user {
            id
            email
            createdAt
            updatedAt
            followerCount
            followingCount
            likesCount
            viewsCount
            name
            description
            poolId
            hasSelectedCategories
            identityId
            avatarPath
            backgroundVideoPath
            website
            bio
          }
          title
          description
          createdAt
          updatedAt
          active
          imageThumbnailPath
          imageFullPath
          imageListPath
          duration
          likeCount
          nestablCount
          viewCount
          commentCount
          shareCount
          dislikeCount
        }
        nextToken
      }
      hasSelectedCategories
      categories {
        id
        title
        displayOrder
        imageThumbnailPath
        imageFullPath
        createdAt
        updatedAt
      }
      identityId
      avatarPath
      backgroundVideoPath
      website
      bio
    }
  }
`;
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
      followerCount
      followingCount
      likesCount
      viewsCount
      name
      description
      poolId
      following {
        items {
          id
          followedUser {
            id
            email
            createdAt
            updatedAt
            followerCount
            followingCount
            likesCount
            viewsCount
            name
            description
            poolId
            hasSelectedCategories
            identityId
            avatarPath
            backgroundVideoPath
            website
            bio
          }
          followingUserFollowedUserId
          followingUser {
            id
            email
            createdAt
            updatedAt
            followerCount
            followingCount
            likesCount
            viewsCount
            name
            description
            poolId
            hasSelectedCategories
            identityId
            avatarPath
            backgroundVideoPath
            website
            bio
          }
          followingUserFollowingUserId
          createdAt
          updatedAt
        }
        nextToken
      }
      submittedVideos {
        items {
          id
          user {
            id
            email
            createdAt
            updatedAt
            followerCount
            followingCount
            likesCount
            viewsCount
            name
            description
            poolId
            hasSelectedCategories
            identityId
            avatarPath
            backgroundVideoPath
            website
            bio
          }
          videoUserId
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
          categories {
            nextToken
          }
        }
        nextToken
      }
      submittedStories {
        items {
          id
          user {
            id
            email
            createdAt
            updatedAt
            followerCount
            followingCount
            likesCount
            viewsCount
            name
            description
            poolId
            hasSelectedCategories
            identityId
            avatarPath
            backgroundVideoPath
            website
            bio
          }
          title
          description
          createdAt
          updatedAt
          active
          imageThumbnailPath
          imageFullPath
          imageListPath
          duration
          likeCount
          nestablCount
          viewCount
          commentCount
          shareCount
          dislikeCount
        }
        nextToken
      }
      hasSelectedCategories
      categories {
        id
        title
        displayOrder
        imageThumbnailPath
        imageFullPath
        createdAt
        updatedAt
      }
      identityId
      avatarPath
      backgroundVideoPath
      website
      bio
    }
  }
`;
export const createFollowingUser = /* GraphQL */ `
  mutation CreateFollowingUser(
    $input: CreateFollowingUserInput!
    $condition: ModelFollowingUserConditionInput
  ) {
    createFollowingUser(input: $input, condition: $condition) {
      id
      followedUser {
        id
        email
        createdAt
        updatedAt
        followerCount
        followingCount
        likesCount
        viewsCount
        name
        description
        poolId
        following {
          items {
            id
            followingUserFollowedUserId
            followingUserFollowingUserId
            createdAt
            updatedAt
          }
          nextToken
        }
        submittedVideos {
          items {
            id
            videoUserId
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
          nextToken
        }
        submittedStories {
          items {
            id
            title
            description
            createdAt
            updatedAt
            active
            imageThumbnailPath
            imageFullPath
            imageListPath
            duration
            likeCount
            nestablCount
            viewCount
            commentCount
            shareCount
            dislikeCount
          }
          nextToken
        }
        hasSelectedCategories
        categories {
          id
          title
          displayOrder
          imageThumbnailPath
          imageFullPath
          createdAt
          updatedAt
        }
        identityId
        avatarPath
        backgroundVideoPath
        website
        bio
      }
      followingUserFollowedUserId
      followingUser {
        id
        email
        createdAt
        updatedAt
        followerCount
        followingCount
        likesCount
        viewsCount
        name
        description
        poolId
        following {
          items {
            id
            followingUserFollowedUserId
            followingUserFollowingUserId
            createdAt
            updatedAt
          }
          nextToken
        }
        submittedVideos {
          items {
            id
            videoUserId
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
          nextToken
        }
        submittedStories {
          items {
            id
            title
            description
            createdAt
            updatedAt
            active
            imageThumbnailPath
            imageFullPath
            imageListPath
            duration
            likeCount
            nestablCount
            viewCount
            commentCount
            shareCount
            dislikeCount
          }
          nextToken
        }
        hasSelectedCategories
        categories {
          id
          title
          displayOrder
          imageThumbnailPath
          imageFullPath
          createdAt
          updatedAt
        }
        identityId
        avatarPath
        backgroundVideoPath
        website
        bio
      }
      followingUserFollowingUserId
      createdAt
      updatedAt
    }
  }
`;
export const updateFollowingUser = /* GraphQL */ `
  mutation UpdateFollowingUser(
    $input: UpdateFollowingUserInput!
    $condition: ModelFollowingUserConditionInput
  ) {
    updateFollowingUser(input: $input, condition: $condition) {
      id
      followedUser {
        id
        email
        createdAt
        updatedAt
        followerCount
        followingCount
        likesCount
        viewsCount
        name
        description
        poolId
        following {
          items {
            id
            followingUserFollowedUserId
            followingUserFollowingUserId
            createdAt
            updatedAt
          }
          nextToken
        }
        submittedVideos {
          items {
            id
            videoUserId
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
          nextToken
        }
        submittedStories {
          items {
            id
            title
            description
            createdAt
            updatedAt
            active
            imageThumbnailPath
            imageFullPath
            imageListPath
            duration
            likeCount
            nestablCount
            viewCount
            commentCount
            shareCount
            dislikeCount
          }
          nextToken
        }
        hasSelectedCategories
        categories {
          id
          title
          displayOrder
          imageThumbnailPath
          imageFullPath
          createdAt
          updatedAt
        }
        identityId
        avatarPath
        backgroundVideoPath
        website
        bio
      }
      followingUserFollowedUserId
      followingUser {
        id
        email
        createdAt
        updatedAt
        followerCount
        followingCount
        likesCount
        viewsCount
        name
        description
        poolId
        following {
          items {
            id
            followingUserFollowedUserId
            followingUserFollowingUserId
            createdAt
            updatedAt
          }
          nextToken
        }
        submittedVideos {
          items {
            id
            videoUserId
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
          nextToken
        }
        submittedStories {
          items {
            id
            title
            description
            createdAt
            updatedAt
            active
            imageThumbnailPath
            imageFullPath
            imageListPath
            duration
            likeCount
            nestablCount
            viewCount
            commentCount
            shareCount
            dislikeCount
          }
          nextToken
        }
        hasSelectedCategories
        categories {
          id
          title
          displayOrder
          imageThumbnailPath
          imageFullPath
          createdAt
          updatedAt
        }
        identityId
        avatarPath
        backgroundVideoPath
        website
        bio
      }
      followingUserFollowingUserId
      createdAt
      updatedAt
    }
  }
`;
export const deleteFollowingUser = /* GraphQL */ `
  mutation DeleteFollowingUser(
    $input: DeleteFollowingUserInput!
    $condition: ModelFollowingUserConditionInput
  ) {
    deleteFollowingUser(input: $input, condition: $condition) {
      id
      followedUser {
        id
        email
        createdAt
        updatedAt
        followerCount
        followingCount
        likesCount
        viewsCount
        name
        description
        poolId
        following {
          items {
            id
            followingUserFollowedUserId
            followingUserFollowingUserId
            createdAt
            updatedAt
          }
          nextToken
        }
        submittedVideos {
          items {
            id
            videoUserId
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
          nextToken
        }
        submittedStories {
          items {
            id
            title
            description
            createdAt
            updatedAt
            active
            imageThumbnailPath
            imageFullPath
            imageListPath
            duration
            likeCount
            nestablCount
            viewCount
            commentCount
            shareCount
            dislikeCount
          }
          nextToken
        }
        hasSelectedCategories
        categories {
          id
          title
          displayOrder
          imageThumbnailPath
          imageFullPath
          createdAt
          updatedAt
        }
        identityId
        avatarPath
        backgroundVideoPath
        website
        bio
      }
      followingUserFollowedUserId
      followingUser {
        id
        email
        createdAt
        updatedAt
        followerCount
        followingCount
        likesCount
        viewsCount
        name
        description
        poolId
        following {
          items {
            id
            followingUserFollowedUserId
            followingUserFollowingUserId
            createdAt
            updatedAt
          }
          nextToken
        }
        submittedVideos {
          items {
            id
            videoUserId
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
          nextToken
        }
        submittedStories {
          items {
            id
            title
            description
            createdAt
            updatedAt
            active
            imageThumbnailPath
            imageFullPath
            imageListPath
            duration
            likeCount
            nestablCount
            viewCount
            commentCount
            shareCount
            dislikeCount
          }
          nextToken
        }
        hasSelectedCategories
        categories {
          id
          title
          displayOrder
          imageThumbnailPath
          imageFullPath
          createdAt
          updatedAt
        }
        identityId
        avatarPath
        backgroundVideoPath
        website
        bio
      }
      followingUserFollowingUserId
      createdAt
      updatedAt
    }
  }
`;
