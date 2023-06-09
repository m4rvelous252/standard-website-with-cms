// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from '@prismicio/types';
import type * as prismic from '@prismicio/client';

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for  Home page documents */
interface HomePageDocumentData {
  /**
   * Slice Zone field in * Home page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<HomePageDocumentDataSlicesSlice>;
}
/**
 * Slice for * Home page → Slice Zone*
 *
 */
type HomePageDocumentDataSlicesSlice = HeroSectionSlice | NavbarSlice;
/**
 *  Home page document from Prismic
 *
 * - **API ID**: `home_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomePageDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<HomePageDocumentData>,
    'home_page',
    Lang
  >;
export type AllDocumentTypes = HomePageDocument;
/**
 * Primary content in HeroSection → Primary
 *
 */
interface HeroSectionSliceDefaultPrimary {
  /**
   * Call to Action field in *HeroSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.primary.call_to_action
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  call_to_action: prismicT.RichTextField;
  /**
   * Heading field in *HeroSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.primary.heading
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  heading: prismicT.RichTextField;
  /**
   * Sub Heading field in *HeroSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.primary.sub_heading
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  sub_heading: prismicT.RichTextField;
}
/**
 * Default variation for HeroSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSectionSliceDefault = prismicT.SharedSliceVariation<
  'default',
  Simplify<HeroSectionSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *HeroSection*
 *
 */
type HeroSectionSliceVariation = HeroSectionSliceDefault;
/**
 * HeroSection Shared Slice
 *
 * - **API ID**: `hero_section`
 * - **Description**: `HeroSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSectionSlice = prismicT.SharedSlice<
  'hero_section',
  HeroSectionSliceVariation
>;
/**
 * Primary content in Navbar → Primary
 *
 */
interface NavbarSliceDefaultPrimary {
  /**
   * Logo field in *Navbar → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.primary.logo
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  logo: prismicT.ImageField<never>;
}
/**
 * Item in Navbar → Items
 *
 */
export interface NavbarSliceDefaultItem {
  /**
   * Navigation label field in *Navbar → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.items[].navigation_label
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  navigation_label: prismicT.KeyTextField;
  /**
   * Navigation link field in *Navbar → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.items[].navigation_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  navigation_link: prismicT.LinkField;
}
/**
 * Default variation for Navbar Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavbarSliceDefault = prismicT.SharedSliceVariation<
  'default',
  Simplify<NavbarSliceDefaultPrimary>,
  Simplify<NavbarSliceDefaultItem>
>;
/**
 * Slice variation for *Navbar*
 *
 */
type NavbarSliceVariation = NavbarSliceDefault;
/**
 * Navbar Shared Slice
 *
 * - **API ID**: `navbar`
 * - **Description**: `Navbar`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavbarSlice = prismicT.SharedSlice<'navbar', NavbarSliceVariation>;
declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      HomePageDocumentData,
      HomePageDocumentDataSlicesSlice,
      HomePageDocument,
      AllDocumentTypes,
      HeroSectionSliceDefaultPrimary,
      HeroSectionSliceDefault,
      HeroSectionSliceVariation,
      HeroSectionSlice,
      NavbarSliceDefaultPrimary,
      NavbarSliceDefaultItem,
      NavbarSliceDefault,
      NavbarSliceVariation,
      NavbarSlice,
    };
  }
}
