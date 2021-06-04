export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  DateTime: string;
  JSON: Record<string, unknown>;
  JSONObject: Record<string, unknown>;
  Time: string;
};





export type Mutation = {
  __typename?: 'Mutation';
  createPost?: Maybe<Post>;
  updatePost?: Maybe<Post>;
  hidePost?: Maybe<Post>;
  deletePost?: Maybe<Post>;
};


export type MutationCreatePostArgs = {
  input: PostInput;
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID'];
  input: PostInput;
};


export type MutationHidePostArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  title: Scalars['String'];
  slug: Scalars['String'];
  body: Scalars['String'];
  author: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  postedAt?: Maybe<Scalars['DateTime']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
};

export type PostInput = {
  title: Scalars['String'];
  slug: Scalars['String'];
  author: Scalars['String'];
  body: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  postedAt?: Maybe<Scalars['DateTime']>;
};

export type PostsSet = {
  __typename?: 'PostsSet';
  posts: Array<Maybe<Post>>;
  count: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  allPosts?: Maybe<PostsSet>;
  findPostById?: Maybe<Post>;
  findPostBySlug?: Maybe<Post>;
  findPostsByTag?: Maybe<Array<Maybe<Post>>>;
  redwood?: Maybe<Redwood>;
  searchPosts?: Maybe<Array<Maybe<Post>>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
};


export type QueryAllPostsArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryFindPostByIdArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryFindPostBySlugArgs = {
  slug?: Maybe<Scalars['String']>;
};


export type QueryFindPostsByTagArgs = {
  tag?: Maybe<Scalars['String']>;
};


export type QuerySearchPostsArgs = {
  term?: Maybe<Scalars['String']>;
};

export type Redwood = {
  __typename?: 'Redwood';
  version?: Maybe<Scalars['String']>;
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};


export type Find_Post_By_IdVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Find_Post_By_Id = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'slug' | 'author' | 'body' | 'image' | 'postedAt'>
    & { tags?: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'name'>
    )>>> }
  )> }
);

export type UpdatePostVariables = Exact<{
  id: Scalars['ID'];
  input: PostInput;
}>;


export type UpdatePost = (
  { __typename?: 'Mutation' }
  & { updatePost?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'slug' | 'author' | 'body' | 'image' | 'postedAt'>
    & { tags?: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'name'>
    )>>> }
  )> }
);

export type CreatePostMutationVariables = Exact<{
  input: PostInput;
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id'>
  )> }
);

export type All_PostsVariables = Exact<{ [key: string]: never; }>;


export type All_Posts = (
  { __typename?: 'Query' }
  & { allPosts?: Maybe<(
    { __typename?: 'PostsSet' }
    & { posts: Array<Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'slug' | 'author' | 'body' | 'image' | 'postedAt'>
      & { tags?: Maybe<Array<Maybe<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'name'>
      )>>> }
    )>> }
  )> }
);

export type HidePostMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type HidePostMutation = (
  { __typename?: 'Mutation' }
  & { hidePost?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id'>
  )> }
);

export type DeletePostMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeletePostMutation = (
  { __typename?: 'Mutation' }
  & { deletePost?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id'>
  )> }
);

export type Unnamed_1_Variables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_ = (
  { __typename?: 'Query' }
  & { tags?: Maybe<Array<Maybe<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id' | 'name'>
  )>>> }
);

export type All_Posts_PagedVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type All_Posts_Paged = (
  { __typename?: 'Query' }
  & { allPosts?: Maybe<(
    { __typename?: 'PostsSet' }
    & Pick<PostsSet, 'count'>
    & { posts: Array<Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'slug' | 'author' | 'body' | 'image' | 'postedAt'>
      & { tags?: Maybe<Array<Maybe<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'name'>
      )>>> }
    )>> }
  )> }
);

export type All_Posts_RecentVariables = Exact<{ [key: string]: never; }>;


export type All_Posts_Recent = (
  { __typename?: 'Query' }
  & { allPosts?: Maybe<(
    { __typename?: 'PostsSet' }
    & { posts: Array<Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'slug' | 'postedAt'>
    )>> }
  )> }
);

export type SearchPostsVariables = Exact<{
  term?: Maybe<Scalars['String']>;
}>;


export type SearchPosts = (
  { __typename?: 'Query' }
  & { posts?: Maybe<Array<Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'slug' | 'author' | 'body' | 'image' | 'postedAt'>
    & { tags?: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'name'>
    )>>> }
  )>>> }
);

export type Posts_Find_By_SlugVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type Posts_Find_By_Slug = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'slug' | 'author' | 'body' | 'image' | 'postedAt'>
    & { tags?: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'name'>
    )>>> }
  )> }
);

export type PostVariables = Exact<{
  tag?: Maybe<Scalars['String']>;
}>;


export type Post = (
  { __typename?: 'Query' }
  & { posts?: Maybe<Array<Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'slug' | 'author' | 'body' | 'image' | 'postedAt'>
    & { tags?: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'name'>
    )>>> }
  )>>> }
);
