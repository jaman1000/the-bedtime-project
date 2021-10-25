import React from "react";
import { Helmet } from "react-helmet";

/**
 * @namespace SEO
 * @function SEO
 * @author Alexander Burdiss
 * @since 10/14/21
 * @version 1.1.0
 * @component
 */
export default function SEO({ title, description, style }) {
  return (
    <Helmet>
      {description && <meta name="description" content={description} />}
      {title ? (
        <title>{title} | The Bedtime Project</title>
      ) : (
        <title>The Bedtime Project</title>
      )}
      {style && <style type="text/css">{style}</style>}
    </Helmet>
  );
}