/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVideo = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
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
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getLikedVideo = /* GraphQL */ `
  query GetLikedVideo($id: ID!) {
    getLikedVideo(id: $id) {
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
export const listLikedVideos = /* GraphQL */ `
  query ListLikedVideos(
    $filter: ModelLikedVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikedVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVideoCategories = /* GraphQL */ `
  query GetVideoCategories($id: ID!) {
    getVideoCategories(id: $id) {
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
export const listVideoCategoriess = /* GraphQL */ `
  query ListVideoCategoriess(
    $filter: ModelVideoCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideoCategoriess(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
`;
export const getFeed = /* GraphQL */ `
  query GetFeed($id: ID!) {
    getFeed(id: $id) {
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
export const listFeeds = /* GraphQL */ `
  query ListFeeds(
    $filter: ModelFeedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        displayOrder
      }
      nextToken
    }
  }
`;
export const getStory = /* GraphQL */ `
  query GetStory($id: ID!) {
    getStory(id: $id) {
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
export const listStorys = /* GraphQL */ `
  query ListStorys(
    $filter: ModelStoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        displayOrder
        imageThumbnailPath
        imageFullPath
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
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
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getFollowingUser = /* GraphQL */ `
  query GetFollowingUser($id: ID!) {
    getFollowingUser(id: $id) {
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
export const listFollowingUsers = /* GraphQL */ `
  query ListFollowingUsers(
    $filter: ModelFollowingUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowingUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        followingUserFollowingUserId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchVideos = /* GraphQL */ `
  query SearchVideos(
    $filter: SearchableVideoFilterInput
    $sort: SearchableVideoSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchVideos(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      total
    }
  }
`;
export const searchLikedVideos = /* GraphQL */ `
  query SearchLikedVideos(
    $filter: SearchableLikedVideoFilterInput
    $sort: SearchableLikedVideoSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchLikedVideos(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const searchVideoCategoriess = /* GraphQL */ `
  query SearchVideoCategoriess(
    $filter: SearchableVideoCategoriesFilterInput
    $sort: SearchableVideoCategoriesSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchVideoCategoriess(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      total
    }
  }
`;
export const searchCategorys = /* GraphQL */ `
  query SearchCategorys(
    $filter: SearchableCategoryFilterInput
    $sort: SearchableCategorySortInput
    $limit: Int
    $nextToken: String
  ) {
    searchCategorys(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        displayOrder
        imageThumbnailPath
        imageFullPath
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const searchUserProfiles = /* GraphQL */ `
  query SearchUserProfiles(
    $filter: SearchableUserProfileFilterInput
    $sort: SearchableUserProfileSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchUserProfiles(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
export const searchFollowingUsers = /* GraphQL */ `
  query SearchFollowingUsers(
    $filter: SearchableFollowingUserFilterInput
    $sort: SearchableFollowingUserSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchFollowingUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
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
        followingUserFollowingUserId
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
