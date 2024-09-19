import { groq } from "next-sanity";

export const homePageQuery = groq`
*[_type == "home" && slug.current == $slug][0] {
  _id,
  title,
  content[] {
    _type,
    _type == 'richTextComponent' => {
      richText[] {
        _type == 'image' => {
          ...
        },
        _type == 'block' => {
          ...
        },
        _type == 'navigationItem' => {
          _type,
          _key,
          "internal": coalesce(navigationItemUrl.internalLink != undefined, false),
          text,
          'link': coalesce(navigationItemUrl.internalLink->slug.current, navigationItemUrl.externalUrl),
        }
      },
    },
    _type == 'textComponent' => {
      _type,  
      text
    }
  },
}
`;

export const pagePaths = groq`
  *[_type == "page" && slug.current != null].slug.current
`;

export const pagesBySlugQuery = groq`
*[_type == "page" && slug.current == $slug][0] {
  _id,
  title,
  content[] {
    _type,
    _type == 'richTextComponent' => {
      richText[] {
        _type == 'block' => {
          ...
        },
        _type == 'navigationItem' => {
          _type,
          _key,
          "internal": coalesce(navigationItemUrl.internalLink != undefined, false),
          text,
          'link': coalesce(navigationItemUrl.internalLink->slug.current, navigationItemUrl.externalUrl),
          "active": navigationItemUrl.active == null
        }
      },
    },
    _type == 'textComponent' => {
      _type,  
      text
    }
  },
}
`;

export const homePageTitleQuery = groq`
  *[_type == "home"][0].title
`;

export const footerLinksQuery = groq`
*[_type == "navigation" && navId.current == "footer"] {
  items[] {
    text,
    "internal": coalesce(navigationItemUrl.internalLink != undefined, false),
    "link": coalesce(navigationItemUrl.internalLink->slug.current, navigationItemUrl.externalUrl),
  }
}
`;

export const sitemapQuery = groq`
*[_type == "page" && active == true && title != "Sitemap"] {
  "text": title,
  "href": slug.current
} | order(text asc)
`;

export const mainMenuNavigation = groq`
*[_type == "navigation" && title == "Home page"] {
  "links": items[] {
    "text": text,
    "link": coalesce(navigationItemUrl.internalLink->slug.current, navigationItemUrl.externalUrl),
  }
}
`;

export const searchQuery = groq`
*[_type == "page"
  && active == true
  && title match "*"+$term+"*"
  && content[].richText[].children[].text match "*"+$term+"*"]
|
score(
  boost(title match "*"+$term+"*", 4),
  boost(content[].richText[].children[].text match "*"+$term+"*", 3)
)
{
  _score > 2 => {
    title,
    "slug": slug.current,
  }
}
`;
/**
 * NEW QUERIES
 */

/**
 * HOME PAGE
 */
export const homepageHero = groq`
*[_type == "hero" && hero_id == "Home"]
{
  "heading": hero_heading,
  "subHeading": hero_sub_heading
}
`;

export const homepageHeroLinks = groq`
*[_type == "navigation" && title == "Home page hero"] {
  "links": items[] {
    "text": text,
    "url": coalesce(navigationItemUrl.internalLink->slug.current, navigationItemUrl.externalUrl),
    isPrimary
  }
}
`;

export const homepageTalkingPoints = groq`
*[_type == "talking_points" && talking_point_id == "Home page"] {
  talking_points[]{
    "heading": talking_point_heading,
    "subHeading": talking_point_sub_heading,
    "icon": talking_point_icon.asset->url
  }
}
`;

export const homepagePlans = groq`
*[_type == "plans" && plan_id == "Home page"] {
  "heading": plan_heading,
  "subHeading": plan_sub_heading
}
`;

export const homepagePageCTA = groq`
* [_type == "cta" && cta_id == "Home page"]
{
    "heading": cta_heading,
    "subHeading": cta_sub_heading,
  "links": links[] {
    text,
    "url": coalesce(navigationItemUrl.internalLink->slug.current, navigationItemUrl.externalUrl),
    isPrimary
  }
}
`;

/**
 * ABOUT US
 */
export const aboutUsPageHero = groq`
  * [_type == "hero" && hero_id == "About us"]
{
  "heading": hero_heading
}
`;

export const aboutUsPageCTA = groq`
* [_type == "cta" && cta_id == "About us"]
{
  "heading": cta_heading,
  "subHeading": cta_sub_heading,
  "links": links[] {
    text,
    "url": coalesce(navigationItemUrl.internalLink->slug.current, navigationItemUrl.externalUrl),
    isPrimary
  }
}
`;

/**
 * FAQa
 */
export const faqsPageHero = groq`
  * [_type == "hero" && hero_id == "FAQs"]
{
  "heading": hero_heading
}
`;

export const faqsPageFaqs = groq`
*[_type == "faqs" && faqs_id == "Home page"] {
  "faqs":faqs[]{
    "heading": faq_heading,
    "subHeading": faq_sub_heading
  }
}
`;

/**
 * CLINICAL SERVICES
 */
export const clinicalServicesPageHero = groq`
  * [_type == "hero" && hero_id == "Clinical Services"]
{
  "heading": hero_heading
}
`;

export const clinicalServicePageFaqs = groq`
*[_type == "faqs" && faqs_id == "Clinical Services"] {
  "faqs":faqs[]{
    "heading": faq_heading,
    "subHeading": faq_sub_heading
  }
}
`;

/**
 * CLINICAL QUALITY ASSURANCE
 */
export const clinicalQualityAssurancewPageHero = groq`
  * [_type == "hero" && hero_id == "Clinical Quality Assurance"]
{
  "heading": hero_heading
}
`;

export const clinicalQualityAssurancePageFaqs = groq`
*[_type == "faqs" && faqs_id == "Clinical Quality Assurance"] {
  "faqs":faqs[]{
    "heading": faq_heading,
    "subHeading": faq_sub_heading
  }
}
`;

/**
 * HOLISTIC THERAPIES
 */
export const holisticTherapiesPageHero = groq`
  * [_type == "hero" && hero_id == "CQC Based Inspections"]
{
  "heading": hero_heading
}
`;

export const holisticTherapiesPageFaqs = groq`
*[_type == "faqs" && faqs_id == "CQC Based Inspections"] {
  "faqs":faqs[]{
    "heading": faq_heading,
    "subHeading": faq_sub_heading
  }
}
`;

/**
 * Footer
 */
export const footer = groq`
*[_type == "strapline" && strapline_page == "Footer" && strapline_id == "strapline-1"] {
  strapline_title,
  "copyright":*[_type == "copyright"] {
    label
  },
  "service_links":*[_type == "navigation" && title == "Services"] {
    title,
    "links": items[] {
      "text": text,
      "link": coalesce(navigationItemUrl.internalLink->slug.current, navigationItemUrl.externalUrl),
    }
  },
  "company_links":*[_type == "navigation" && title == "Company"] {
    title,
    "links": items[] {
      "text": text,
      "link": coalesce(navigationItemUrl.internalLink->slug.current, navigationItemUrl.externalUrl),
    }
  },
  "icons":*[_type == "social"] {
    "list": platform[] {
      "platform": name,
      "url": url,
      "image": image.asset->url,
    }
  }
}
`;

/**
 * Tailored landing page content
 */
export const consultantsLinks = groq`
*[_type == "navigation" && title == "Consultants"] {
  "links": items[] {
    "text": text,
    "url": coalesce(navigationItemUrl.internalLink->slug.current, navigationItemUrl.externalUrl),
    isPrimary
  }
}
`;

export const patientsLinks = groq`
*[_type == "navigation" && title == "Patients"] {
  "links": items[] {
    "text": text,
    "url": coalesce(navigationItemUrl.internalLink->slug.current, navigationItemUrl.externalUrl),
    isPrimary
  }
}
`;
export const referralLinks = groq`
*[_type == "navigation" && title == "Support"] {
  "links": items[] {
    "text": text,
    "url": coalesce(navigationItemUrl.internalLink->slug.current, navigationItemUrl.externalUrl),
    isPrimary
  }
}
`;

//
//
//
//
export const metadataQuery = groq`
*[_type == "page" && slug.current == $slug] {
  "title": metadata.title,
  "description": metadata.description
}
`;

export const navigationQuery = groq`
*[_type == "header"] {
  title,
  "logos": {
    "light": logo.light.asset->url,
    "dark": logo.dark.asset->url, 
  },
  "links": content.navigation->links[] {
    active,
    label,
    "bookmark": internalUrl != null,
    "internal": coalesce(internal._type == "reference", false),
    "url": coalesce(internal->slug.current, externalUrl, internalUrl),
  } | order(label asc),
  "cta": content.cta->links[] {
    active,
    label,
    "internal": coalesce(internal._type == "reference", false),
    "url": coalesce(internal->slug.current, externalUrl),
  } | order(label asc)
}
`;

export const footerQuery = groq`
*[_type == "footer"] {
  copyrightName,
  copyrightMessage,
  "logos": {
    "light": logo.light.asset->url,
    "dark": logo.dark.asset->url, 
  },
  "links": content.navigation->links[] {
    active,
    label,
    "internal": coalesce(internal._type == "reference", false),
    "url": coalesce(internal->slug.current, externalUrl),
  } | order(label asc)
}
`;

export const faqsQuery = groq`
*[_type == "faq" && faqPage->slug.current == $slug] {
  title,
   "faqs": faqs[] {
     question,
     answer
   }
}
`;

export const pageQuery = groq`
*[(_type == "page" && slug.current == $slug)] {
  ...,
  "videoBlock": content[_type == "contentBlock"].content[_type=="videoBlock"] {
    "_type": _type,
    "file": video.asset->url,
    "aspectRatio": aspectRatio,
    "company": company,
    "strapline": strapline,
    "poster": poster.asset->url,
    "logo": logo.asset->url
  },
  "ctas": content[_type == "contentBlock"].content[_type=="cta"]-> {
    "list": cta[] {
      "title": title,
      "description": description,
      "url": coalesce(internal->slug.current, externalUrl),
      "color": color.hex,
      "_type": _type
    },
  },
  "partners": content[_type == "contentBlock"].content[_type=="partner"]-> {
    "_type":_type,
    "partnerName":partnerName,
    "statements": statements,
    "strapline": strapline,
    "detail": detail,
    "infoCards": infoCards-> {
      "list": cta[] {
        "title": title,
        "titleColor": titleColor.hex,
        "description": description,
        "descriptionColor": descriptionColor.hex,
        "url": coalesce(internal->slug.current, externalUrl),
        "borderColor": borderColor.hex,
        "_type": _type
      },
    },
    "artists": artists-> {
      "list": artists[][_type=="artist"]-> {
        "name": name,
        "bio": bio,
        "url": slug.current,
        "image": image.asset->url,
        "_type": _type,
        "link": social[0].url,
      },
      "_type": _type
    },
  },
  "artists": content[_type == "contentBlock"].content[_type=="artists"]-> {
    "list": artists[]-> {
      "artist": {
        "name": name,
        "bio": bio,
        "url": slug.current,
        "image": image.asset->url,
      },
      "_type": _type
    }
  },
  "images": content[_type == "contentBlock"].content[_type=="image"] {
    "key": _key,
    "caption": caption,
    "url": asset->url,
    ...
  },
  "salesPoints": content[_type == "contentBlock"].content[_type=="salesPoints"]-> {
    "_type": _type,
    "name": name,
    "statements": statements,
    "artists": artists[]-> {
      "image": image.asset->url,
      "url": slug.current,
      "name": name,
      "_type": _type
    }
  },
  "distributionSignUp": content[_type == "contentBlock"].content[_type=="distributionSignUp"]-> {
    "_type": _type,
    "name": name,
    "logo": logo.asset->url,
    "strapline": strapline,
    "statements": statements,
    "ctas": ctas[]->links[] {
      active,
      label,
      "internal": coalesce(externalUrl == undefined, false),
      "link": coalesce(externalUrl, internal.slug.current),
    }
  },
  "distributionPartnerIntroduction": content[_type == "contentBlock"].content[_type=="distributionPartnerIntroduction"]-> {
    "_type": _type,
    "introduction": introduction,
    "logo": image.asset->url,
    "strapline": strapline,
    "statements": statements,
    "ctas": ctas[]->links[] {
      active,
      label,
      "internal": coalesce(externalUrl == undefined, false),
      "link": coalesce(externalUrl, internal.slug.current),
    },
  },
  "distributionServices": content[_type == "contentBlock"].content[_type=="distributionServices"]-> {
    "_type": _type,
    "name": name,
    "services": services[]-> {
      strapline,
      number,
      service,
      statements
    }
  },
  "podcast": content[_type == "contentBlock"].content[_type == "podcast"]-> {
      "_type": _type,
      title,
      "image":image.asset->url,
      strapline,
      detail
  },
  "socialLinks": *[_type == "socialLinks"] {
    "_type": _type,
    title,
    "links": socials[] {
      "_type": _type,
      title,
      url
    }
  }
}
`;

// NEW QUERIES

// HEADER
export const headerQuery = groq`
*[_type == "header" && internal->slug.current == $slug] {
  title,
  established,
  "linksInTheCenter":linksInTheCenter[]{
    label,
    _type,
    "internal": coalesce(internal != undefined, false),
    'link': coalesce(internal->slug.current, externalUrl),
    active,
  },
    "linksOnTheRight":linksOnTheRight[]{
    label,
    _type,
    "internal": coalesce(internal != undefined, false),
    'link': coalesce(internal->slug.current, externalUrl),
    active
  },
}
`;

// FOOTER
export const footerTextQuery = groq`
*[_type == "footer" && page == "Landing page"] {
  text
}
`;
