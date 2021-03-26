/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo {
    onCreateVideo {
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
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo {
    onUpdateVideo {
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
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo {
    onDeleteVideo {
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
export const onCreateLikedVideo = /* GraphQL */ `
  subscription OnCreateLikedVideo {
    onCreateLikedVideo {
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
export const onUpdateLikedVideo = /* GraphQL */ `
  subscription OnUpdateLikedVideo {
    onUpdateLikedVideo {
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
export const onDeleteLikedVideo = /* GraphQL */ `
  subscription OnDeleteLikedVideo {
    onDeleteLikedVideo {
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
export const onCreateVideoCategories = /* GraphQL */ `
  subscription OnCreateVideoCategories {
    onCreateVideoCategories {
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
export const onUpdateVideoCategories = /* GraphQL */ `
  subscription OnUpdateVideoCategories {
    onUpdateVideoCategories {
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
export const onDeleteVideoCategories = /* GraphQL */ `
  subscription OnDeleteVideoCategories {
    onDeleteVideoCategories {
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
export const onCreateFeed = /* GraphQL */ `
  subscription OnCreateFeed {
    onCreateFeed {
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
export const onUpdateFeed = /* GraphQL */ `
  subscription OnUpdateFeed {
    onUpdateFeed {
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
export const onDeleteFeed = /* GraphQL */ `
  subscription OnDeleteFeed {
    onDeleteFeed {
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
export const onCreateStory = /* GraphQL */ `
  subscription OnCreateStory {
    onCreateStory {
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
export const onUpdateStory = /* GraphQL */ `
  subscription OnUpdateStory {
    onUpdateStory {
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
export const onDeleteStory = /* GraphQL */ `
  subscription OnDeleteStory {
    onDeleteStory {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile {
    onCreateUserProfile {
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
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile {
    onUpdateUserProfile {
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
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile {
    onDeleteUserProfile {
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
export const onCreateFollowingUser = /* GraphQL */ `
  subscription OnCreateFollowingUser {
    onCreateFollowingUser {
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
export const onUpdateFollowingUser = /* GraphQL */ `
  subscription OnUpdateFollowingUser {
    onUpdateFollowingUser {
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
export const onDeleteFollowingUser = /* GraphQL */ `
  subscription OnDeleteFollowingUser {
    onDeleteFollowingUser {
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
