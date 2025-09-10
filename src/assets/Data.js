const data = [
    {
        "id": 1,
        "heading": "HTML Structural Elements Documentation",
        "tags": [
            {
                "tag-name": "html",
                "tag-des": "Root element of an HTML5 document, containing all other elements.",
                "atribute": [
                    {
                        "atr-name": ["lang", "dir"],
                        "atr-des": [
                            "Sets the document's primary language (e.g., 'en' for English).",
                            "Sets text direction ('ltr' for left-to-right, 'rtl' for right-to-left)."
                        ]
                    }
                ]
            },
            {
                "tag-name": "head",
                "tag-des": "Contains metadata, styles, scripts, and external resource links, not displayed.",
                "atribute": [
                    {
                        "atr-name": ["id", "class"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "body",
                "tag-des": "Contains all visible content, such as text, images, and interactive elements.",
                "atribute": [
                    {
                        "atr-name": ["onload", "onunload", "id", "class"],
                        "atr-des": [
                            "Runs JavaScript when the page loads.",
                            "Runs JavaScript when the page unloads.",
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "div",
                "tag-des": "Block-level container for grouping content, used for layout or styling.",
                "atribute": [
                    {
                        "atr-name": ["id", "class", "style", "title", "data-*"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting.",
                            "Defines inline CSS styles.",
                            "Advisory text, shown as a tooltip.",
                            "Custom data attributes for scripting (e.g., 'data-id')."
                        ]
                    }
                ]
            },
            {
                "tag-name": "span",
                "tag-des": "Inline container for grouping text or elements for styling or scripting.",
                "atribute": [
                    {
                        "atr-name": ["id", "class", "style", "title", "data-*"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting.",
                            "Defines inline CSS styles.",
                            "Advisory text, shown as a tooltip.",
                            "Custom data attributes for scripting (e.g., 'data-id')."
                        ]
                    }
                ]
            },
            {
                "tag-name": "main",
                "tag-des": "Represents the primary content of the document, used once per page.",
                "atribute": [
                    {
                        "atr-name": ["id", "class", "aria-label"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting.",
                            "Accessible name for screen readers."
                        ]
                    }
                ]
            },
            {
                "tag-name": "header",
                "tag-des": "Defines a header for a document or section, often with logos or navigation.",
                "atribute": [
                    {
                        "atr-name": ["id", "class"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "footer",
                "tag-des": "Defines a footer for a document or section, often with copyright or links.",
                "atribute": [
                    {
                        "atr-name": ["id", "class"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "section",
                "tag-des": "Groups related content, typically with a heading, for thematic organization.",
                "atribute": [
                    {
                        "atr-name": ["id", "class", "aria-label"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting.",
                            "Accessible name for screen readers."
                        ]
                    }
                ]
            },
            {
                "tag-name": "article",
                "tag-des": "Represents independent, self-contained content like a blog post or article.",
                "atribute": [
                    {
                        "atr-name": ["id", "class"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "aside",
                "tag-des": "Contains content indirectly related to the main content, like sidebars.",
                "atribute": [
                    {
                        "atr-name": ["id", "class"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "nav",
                "tag-des": "Defines a section for navigation links, like menus or tables of contents.",
                "atribute": [
                    {
                        "atr-name": ["id", "class", "aria-label"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting.",
                            "Accessible name for screen readers."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "heading": "HTML Heading Elements Documentation",
        "tags": [
            {
                "tag-name": "h1",
                "tag-des": "Primary heading for the main title, typically used once per page.",
                "atribute": [
                    {
                        "atr-name": ["id", "class", "style", "title", "aria-label"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting.",
                            "Defines inline CSS styles.",
                            "Advisory text, shown as a tooltip.",
                            "Accessible name for screen readers."
                        ]
                    }
                ]
            },
            {
                "tag-name": "h2",
                "tag-des": "Second-level heading for subsections under the main title.",
                "atribute": [
                    {
                        "atr-name": ["id", "class", "style", "title", "aria-label"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting.",
                            "Defines inline CSS styles.",
                            "Advisory text, shown as a tooltip.",
                            "Accessible name for screen readers."
                        ]
                    }
                ]
            },
            {
                "tag-name": "h3",
                "tag-des": "Third-level heading for subsections under `<h2>`.",
                "atribute": [
                    {
                        "atr-name": ["id", "class", "style", "title", "aria-label"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting.",
                            "Defines inline CSS styles.",
                            "Advisory text, shown as a tooltip.",
                            "Accessible name for screen readers."
                        ]
                    }
                ]
            },
            {
                "tag-name": "h4",
                "tag-des": "Fourth-level heading for subsections under `<h3>`.",
                "atribute": [
                    {
                        "atr-name": ["id", "class", "style", "title", "aria-label"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting.",
                            "Defines inline CSS styles.",
                            "Advisory text, shown as a tooltip.",
                            "Accessible name for screen readers."
                        ]
                    }
                ]
            },
            {
                "tag-name": "h5",
                "tag-des": "Fifth-level heading for subsections under `<h4>`.",
                "atribute": [
                    {
                        "atr-name": ["id", "class", "style", "title", "aria-label"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting.",
                            "Defines inline CSS styles.",
                            "Advisory text, shown as a tooltip.",
                            "Accessible name for screen readers."
                        ]
                    }
                ]
            },
            {
                "tag-name": "h6",
                "tag-des": "Lowest-level heading for subsections under `<h5>`.",
                "atribute": [
                    {
                        "atr-name": ["id", "class", "style", "title", "aria-label"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting.",
                            "Defines inline CSS styles.",
                            "Advisory text, shown as a tooltip.",
                            "Accessible name for screen readers."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 3,
        "heading": "HTML Text Content Elements Documentation",
        "tags": [
            {
                "tag-name": "p",
                "tag-des": "Defines a paragraph of text with default spacing.",
                "atribute": [
                    {
                        "atr-name": ["id", "class", "style", "title"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting.",
                            "Defines inline CSS styles.",
                            "Advisory text, shown as a tooltip."
                        ]
                    }
                ]
            },
            {
                "tag-name": "a",
                "tag-des": "Creates a hyperlink to a URL, anchor, or resource.",
                "atribute": [
                    {
                        "atr-name": ["href", "target", "rel", "download", "title", "aria-label"],
                        "atr-des": [
                            "Specifies the destination URL or anchor.",
                            "Sets where the link opens (e.g., '_blank' for new tab).",
                            "Defines the relationship to the resource (e.g., 'nofollow').",
                            "Triggers file download instead of navigation.",
                            "Advisory text, shown as a tooltip.",
                            "Accessible name for screen readers."
                        ]
                    }
                ]
            },
            {
                "tag-name": "strong",
                "tag-des": "Marks text with strong importance, typically bold.",
                "atribute": [
                    {
                        "atr-name": ["id", "class", "style"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting.",
                            "Defines inline CSS styles."
                        ]
                    }
                ]
            },
            {
                "tag-name": "em",
                "tag-des": "Marks text with emphasis, typically italic.",
                "atribute": [
                    {
                        "atr-name": ["id", "class", "style"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting.",
                            "Defines inline CSS styles."
                        ]
                    }
                ]
            },
            {
                "tag-name": "br",
                "tag-des": "Inserts a single line break in text. Self-closing tag.",
                "atribute": [] // Removed deprecated 'clear' attribute
            },
            {
                "tag-name": "hr",
                "tag-des": "Represents a thematic break, typically a horizontal line.",
                "atribute": [
                    {
                        "atr-name": ["id", "class", "style"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting.",
                            "Defines inline CSS styles."
                        ]
                    }
                ]
            },
            {
                "tag-name": "blockquote",
                "tag-des": "Represents a long quotation, often indented.",
                "atribute": [
                    {
                        "atr-name": ["cite", "id", "class"],
                        "atr-des": [
                            "Specifies the source URL of the quote.",
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "code",
                "tag-des": "Marks inline code or output, typically in monospace font.",
                "atribute": [
                    {
                        "atr-name": ["id", "class", "style"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting.",
                            "Defines inline CSS styles."
                        ]
                    }
                ]
            },
            {
                "tag-name": "pre",
                "tag-des": "Defines preformatted text, preserving spaces and line breaks.",
                "atribute": [
                    {
                        "atr-name": ["id", "class", "style"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting.",
                            "Defines inline CSS styles."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 4,
        "heading": "HTML List Elements Documentation",
        "tags": [
            {
                "tag-name": "ul",
                "tag-des": "Defines an unordered list, typically with bullet points.",
                "atribute": [
                    {
                        "atr-name": ["id", "class", "style"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting.",
                            "Defines inline CSS styles."
                        ]
                    }
                ]
            },
            {
                "tag-name": "ol",
                "tag-des": "Defines an ordered list, typically with numbers or letters.",
                "atribute": [
                    {
                        "atr-name": ["type", "start", "reversed", "id", "class"],
                        "atr-des": [
                            "Sets numbering type ('1', 'A', 'a', 'I', 'i').",
                            "Sets the starting number (e.g., '2').",
                            "Reverses the list order (boolean).",
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "li",
                "tag-des": "Defines a list item in an `<ul>` or `<ol>`.",
                "atribute": [
                    {
                        "atr-name": ["value", "id", "class"],
                        "atr-des": [
                            "Sets a specific number for an `<ol>` item (e.g., '5').",
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "dl",
                "tag-des": "Defines a description list for terms and their descriptions.",
                "atribute": [
                    {
                        "atr-name": ["id", "class"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "dt",
                "tag-des": "Defines a term in a description list.",
                "atribute": [
                    {
                        "atr-name": ["id", "class"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "dd",
                "tag-des": "Defines a description for a term in a description list.",
                "atribute": [
                    {
                        "atr-name": ["id", "class"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 5,
        "heading": "HTML Table Elements Documentation",
        "tags": [
            {
                "tag-name": "table",
                "tag-des": "Defines a table for structured tabular data.",
                "atribute": [
                    {
                        "atr-name": ["id", "class", "border"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting.",
                            "Sets border thickness (use CSS for modern styling)."
                        ]
                    }
                ]
            },
            {
                "tag-name": "caption",
                "tag-des": "Defines a title or caption for a table.",
                "atribute": [
                    {
                        "atr-name": ["id", "class"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "thead",
                "tag-des": "Groups header rows in a table for styling or scripting.",
                "atribute": [
                    {
                        "atr-name": ["id", "class"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "tbody",
                "tag-des": "Groups body rows in a table for data content.",
                "atribute": [
                    {
                        "atr-name": ["id", "class"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "tfoot",
                "tag-des": "Groups footer rows in a table, often for summaries.",
                "atribute": [
                    {
                        "atr-name": ["id", "class"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "tr",
                "tag-des": "Defines a table row for header or data cells.",
                "atribute": [
                    {
                        "atr-name": ["id", "class"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "th",
                "tag-des": "Defines a table header cell, typically bold and centered.",
                "atribute": [
                    {
                        "atr-name": ["scope", "rowspan", "colspan", "id", "class"],
                        "atr-des": [
                            "Specifies header scope ('row', 'col', 'rowgroup', 'colgroup').",
                            "Spans the cell across multiple rows (e.g., '2').",
                            "Spans the cell across multiple columns (e.g., '2').",
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "td",
                "tag-des": "Defines a table data cell for content.",
                "atribute": [
                    {
                        "atr-name": ["rowspan", "colspan", "id", "class"],
                        "atr-des": [
                            "Spans the cell across multiple rows (e.g., '2').",
                            "Spans the cell across multiple columns (e.g., '2').",
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "colgroup",
                "tag-des": "Groups columns in a table for styling or formatting.",
                "atribute": [
                    {
                        "atr-name": ["span", "id", "class"],
                        "atr-des": [
                            "Specifies the number of columns to group (e.g., '2').",
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "col",
                "tag-des": "Defines properties for columns within `<colgroup>`.",
                "atribute": [
                    {
                        "atr-name": ["span", "id", "class", "style"],
                        "atr-des": [
                            "Specifies the number of columns spanned (e.g., '2').",
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting.",
                            "Defines inline CSS styles."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 6,
        "heading": "HTML Form Elements Documentation",
        "tags": [
            {
                "tag-name": "form",
                "tag-des": "Defines a form for user input and data submission.",
                "atribute": [
                    {
                        "atr-name": ["action", "method", "target", "enctype", "novalidate"],
                        "atr-des": [
                            "Specifies the URL for form data submission.",
                            "Sets the HTTP method ('get' or 'post').",
                            "Sets where the response displays (e.g., '_blank').",
                            "Defines data encoding (e.g., 'multipart/form-data').",
                            "Disables browser validation (boolean)."
                        ]
                    }
                ]
            },
            {
                "tag-name": "input",
                "tag-des": "Creates an input control, behavior set by `type` attribute.",
                "atribute": [
                    {
                        "atr-name": ["type", "name", "value", "placeholder", "required", "id", "class"],
                        "atr-des": [
                            "Defines input type (e.g., 'text', 'email', 'checkbox').",
                            "Sets the name for form submission.",
                            "Sets the default or initial value.",
                            "Displays placeholder text before input.",
                            "Marks the field as required (boolean).",
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "label",
                "tag-des": "Defines a label for an input, improving accessibility.",
                "atribute": [
                    {
                        "atr-name": ["for", "id", "class"],
                        "atr-des": [
                            "Links to an input’s `id`.",
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "textarea",
                "tag-des": "Creates a multi-line text input control.",
                "atribute": [
                    {
                        "atr-name": ["rows", "cols", "name", "placeholder", "required", "id", "class"],
                        "atr-des": [
                            "Sets visible text rows.",
                            "Sets visible text columns.",
                            "Sets the name for form submission.",
                            "Displays placeholder text before input.",
                            "Marks the field as required (boolean).",
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "button",
                "tag-des": "Creates a clickable button for actions or form submission.",
                "atribute": [
                    {
                        "atr-name": ["type", "id", "class", "disabled"],
                        "atr-des": [
                            "Sets button type ('submit', 'reset', 'button').",
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting.",
                            "Disables the button (boolean)."
                        ]
                    }
                ]
            },
            {
                "tag-name": "select",
                "tag-des": "Creates a dropdown list for selecting options.",
                "atribute": [
                    {
                        "atr-name": ["name", "multiple", "required", "id", "class"],
                        "atr-des": [
                            "Sets the name for form submission.",
                            "Allows multiple selections (boolean).",
                            "Marks the field as required (boolean).",
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "option",
                "tag-des": "Defines an option in a `<select>` dropdown.",
                "atribute": [
                    {
                        "atr-name": ["value", "selected", "disabled"],
                        "atr-des": [
                            "Sets the value sent on form submission.",
                            "Marks the option as pre-selected (boolean).",
                            "Disables the option (boolean)."
                        ]
                    }
                ]
            },
            {
                "tag-name": "fieldset",
                "tag-des": "Groups related form elements, often with a `<legend>`.",
                "atribute": [
                    {
                        "atr-name": ["disabled", "id", "class"],
                        "atr-des": [
                            "Disables all controls in the fieldset (boolean).",
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "legend",
                "tag-des": "Defines a caption for a `<fieldset>`.",
                "atribute": [
                    {
                        "atr-name": ["id", "class"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 7,
        "heading": "HTML Media Elements Documentation",
        "tags": [
            {
                "tag-name": "img",
                "tag-des": "Embeds an image in the document.",
                "atribute": [
                    {
                        "atr-name": ["src", "alt", "width", "height", "srcset", "sizes"],
                        "atr-des": [
                            "Specifies the image URL.",
                            "Provides alternative text for accessibility.",
                            "Sets image width in pixels.",
                            "Sets image height in pixels.",
                            "Provides multiple image sources for responsive design.",
                            "Defines image sizes for different viewports."
                        ]
                    }
                ]
            },
            {
                "tag-name": "audio",
                "tag-des": "Embeds audio content with optional playback controls.",
                "atribute": [
                    {
                        "atr-name": ["controls", "autoplay", "loop", "muted", "src"],
                        "atr-des": [
                            "Shows playback controls (boolean).",
                            "Plays audio automatically (boolean).",
                            "Loops the audio (boolean).",
                            "Mutes audio by default (boolean).",
                            "Specifies the audio file URL."
                        ]
                    }
                ]
            },
            {
                "tag-name": "video",
                "tag-des": "Embeds video content with optional playback controls.",
                "atribute": [
                    {
                        "atr-name": ["controls", "autoplay", "loop", "muted", "poster", "width", "height"],
                        "atr-des": [
                            "Shows playback controls (boolean).",
                            "Plays video automatically (boolean).",
                            "Loops the video (boolean).",
                            "Mutes video by default (boolean).",
                            "Specifies a preview image URL.",
                            "Sets video width in pixels.",
                            "Sets video height in pixels."
                        ]
                    }
                ]
            },
            {
                "tag-name": "source",
                "tag-des": "Specifies media resources for `<audio>` or `<video>`.",
                "atribute": [
                    {
                        "atr-name": ["src", "type", "media"],
                        "atr-des": [
                            "Specifies the media file URL.",
                            "Sets the MIME type (e.g., 'video/mp4').",
                            "Defines the media query for responsive use."
                        ]
                    }
                ]
            },
            {
                "tag-name": "track",
                "tag-des": "Adds text tracks (subtitles, captions) for `<audio>` or `<video>`.",
                "atribute": [
                    {
                        "atr-name": ["kind", "src", "srclang", "label", "default"],
                        "atr-des": [
                            "Sets track type ('subtitles', 'captions', etc.).",
                            "Specifies the track file URL.",
                            "Sets the track language (e.g., 'en').",
                            "Provides a user-readable track name.",
                            "Sets the track as default (boolean)."
                        ]
                    }
                ]
            },
            {
                "tag-name": "iframe",
                "tag-des": "Embeds another HTML document within the current page.",
                "atribute": [
                    {
                        "atr-name": ["src", "width", "height", "title", "sandbox"],
                        "atr-des": [
                            "Specifies the embedded page URL.",
                            "Sets iframe width in pixels.",
                            "Sets iframe height in pixels.",
                            "Provides a title for accessibility.",
                            "Restricts iframe permissions (e.g., 'allow-scripts')."
                        ]
                    }
                ]
            },
            {
                "tag-name": "embed",
                "tag-des": "Embeds external content or plugins, like multimedia.",
                "atribute": [
                    {
                        "atr-name": ["src", "type", "width", "height"],
                        "atr-des": [
                            "Specifies the resource URL.",
                            "Sets the MIME type (e.g., 'application/x-shockwave-flash').",
                            "Sets content width in pixels.",
                            "Sets content height in pixels."
                        ]
                    }
                ]
            },
            {
                "tag-name": "object",
                "tag-des": "Embeds multimedia or applications, like PDFs or plugins.",
                "atribute": [
                    {
                        "atr-name": ["data", "type", "width", "height"],
                        "atr-des": [
                            "Specifies the resource URL.",
                            "Sets the MIME type (e.g., 'application/pdf').",
                            "Sets object width in pixels.",
                            "Sets object height in pixels."
                        ]
                    }
                ]
            },
            {
                "tag-name": "param",
                "tag-des": "Defines parameters for an `<object>` element.",
                "atribute": [
                    {
                        "atr-name": ["name", "value"],
                        "atr-des": [
                            "Specifies the parameter name.",
                            "Sets the parameter value."
                        ]
                    }
                ]
            },
            {
                "tag-name": "canvas",
                "tag-des": "Provides a surface for rendering graphics via JavaScript.",
                "atribute": [
                    {
                        "atr-name": ["width", "height", "id", "class"],
                        "atr-des": [
                            "Sets canvas width in pixels.",
                            "Sets canvas height in pixels.",
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "svg",
                "tag-des": "Defines scalable vector graphics for shapes or icons.",
                "atribute": [
                    {
                        "atr-name": ["width", "height", "viewBox", "id", "class"],
                        "atr-des": [
                            "Sets SVG width in pixels.",
                            "Sets SVG height in pixels.",
                            "Defines coordinate system and aspect ratio.",
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 8,
        "heading": "HTML Metadata and Scripting Elements Documentation",
        "tags": [
            {
                "tag-name": "meta",
                "tag-des": "Defines metadata like character set, SEO, or viewport settings.",
                "atribute": [
                    {
                        "atr-name": ["charset", "name", "content", "http-equiv"],
                        "atr-des": [
                            "Sets character encoding (e.g., 'UTF-8').",
                            "Specifies metadata type (e.g., 'description').",
                            "Provides the metadata value.",
                            "Simulates HTTP headers (e.g., 'refresh')."
                        ]
                    }
                ]
            },
            {
                "tag-name": "title",
                "tag-des": "Sets the document’s title, shown in the browser tab.",
                "atribute": [
                    {
                        "atr-name": ["id", "class"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "link",
                "tag-des": "Links to external resources like CSS or favicons.",
                "atribute": [
                    {
                        "atr-name": ["rel", "href", "type", "media"],
                        "atr-des": [
                            "Sets relationship (e.g., 'stylesheet', 'icon').",
                            "Specifies the resource URL.",
                            "Sets MIME type (e.g., 'text/css').",
                            "Defines media query for the resource."
                        ]
                    }
                ]
            },
            {
                "tag-name": "style",
                "tag-des": "Defines internal CSS styles for the document.",
                "atribute": [
                    {
                        "atr-name": ["type", "media"],
                        "atr-des": [
                            "Sets MIME type (e.g., 'text/css').",
                            "Defines media query for the styles."
                        ]
                    }
                ]
            },
            {
                "tag-name": "script",
                "tag-des": "Embeds or references JavaScript code for interactivity.",
                "atribute": [
                    {
                        "atr-name": ["src", "type", "defer", "async"],
                        "atr-des": [
                            "Specifies the external script URL.",
                            "Sets MIME type (e.g., 'text/javascript').",
                            "Defers script execution until page is parsed (boolean).",
                            "Executes script asynchronously (boolean)."
                        ]
                    }
                ]
            },
            {
                "tag-name": "noscript",
                "tag-des": "Provides fallback content when JavaScript is disabled.",
                "atribute": [
                    {
                        "atr-name": ["id", "class"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "base",
                "tag-des": "Sets the base URL for relative URLs in the document.",
                "atribute": [
                    {
                        "atr-name": ["href", "target"],
                        "atr-des": [
                            "Specifies the base URL for links.",
                            "Sets default target for links (e.g., '_blank')."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 9,
        "heading": "HTML Interactive Elements Documentation",
        "tags": [
            {
                "tag-name": "details",
                "tag-des": "Creates a disclosure widget to show or hide content.",
                "atribute": [
                    {
                        "atr-name": ["open", "id", "class"],
                        "atr-des": [
                            "Shows content by default (boolean).",
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "summary",
                "tag-des": "Defines a heading for a `<details>` element.",
                "atribute": [
                    {
                        "atr-name": ["id", "class"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "dialog",
                "tag-des": "Creates a dialog box or modal popup for interaction.",
                "atribute": [
                    {
                        "atr-name": ["open", "id", "class"],
                        "atr-des": [
                            "Shows the dialog by default (boolean).",
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            },
            {
                "tag-name": "menu",
                "tag-des": "Defines a list of commands for menus or toolbars.",
                "atribute": [
                    {
                        "atr-name": ["id", "class"],
                        "atr-des": [
                            "Unique identifier for scripting or linking.",
                            "Applies CSS class names for styling or scripting."
                        ]
                    }
                ]
            }
        ]
    }
]

export default data;