# Machine translation abuse calculation

Content translation calculates the unmodified machine translation content in each section. Depending on how much unmodified content is present, warning or error is shown to user. This encourages the user to edit it further. In some cases users are still able to publish, but the resulting page may get added to a tracking category of potentially unreviewed translations for the community to review. In other cases, users may not be allowed to publish.

Source code: [mw.cx.TranslationTracker.js](https://github.com/wikimedia/mediawiki-extensions-ContentTranslation/blob/master/modules/mw.cx.TranslationTracker.js)

## Algorithm

On section content change, the relative amount of content that got modified compared to the unmodified MT or source copy. The calculation is based on number of words that remain unchanged.

1. Convert content to plain text: All calculations are based on the plain text content of a paragraph. All paragraphs are HTML rich content-we convert this to plain text. Both source paragraph and translated content is converted to plain text.
2. If both plain text contents are same, return the score as `1`. This is the highest value and indicates, content was not at all modified by translator. If not, proceed.
3. Tokenize the plain text to words. Using `space` as delimiter, convert the plain text content to array of tokens. Note that this array may contain duplicate tokens. For CJK languages which do not use spaces, each character is a token.
4. Among the token set for source language and target language, find the biggest set. We call it `bigset`, and smaller set is called `smallset`
5. Find the intersection two token sets. This is set of tokens that did not change. We call it `unmodifiedTokens`
6. Calculate the ratio: `size(unmodiedTokens)/size(bigset)`. This is the score indicating the relative value of unmodified content. The value will be between 0 and 1. For example, If source has 10 tokens and we see that 2 tokens are different or not present in translation, we are saying that translation is 80% (ie. 10-2/10) of unmodified version of source.

## Notes

* We do not calculate unmodified MT content for sections that are:
  * Images
  * Tables
  * Section Headings
  * Block level templates such as infoboxes, references.
  * Lists
  * Math formula
  * Definition lists
  * Poem
* The comparison of tokens is case sensitive. Punctuation characters are not ignored.
* Consecutive whitespaces are considered as single whitespace and do not count as token.

## Examples for calculation

|Original content|Translation|Unmodified content %| Explanation |
| ------------- |:-------------:| -----:|---------------------:|
|Sun rises in the east | Sun rises in the east | 100% | Both are same |
|Sun rises in the east | The Sun rises in the east | 80% | A token is added. 4/5=0.8|
|The flowers are beautiful | flowers are beautiful | 75% | A token is deleted. 3/4=0.75|
|The flowers are beautiful | He ate oranges | 0% | All token are modified. 0/4=0|
|典范条目 |典闻动态 | 25% | Only 1 unmodified character in Chinese. 1/4=0.25|
|The flowers are beautiful |The flower is beautiful and fresh | 33% | 2 unmodified tokens. 2/6=0.33|

## Problematic sections

A section is considered problematic if its MT abuse is above some defined thresholds. These thresholds are not configurable and internally defined in the code.

* If machine translation is used and if unmodified content is above 85%,
* If machine translation is used, warning is shown to user and user explicitly suppress that warning. In this case we increased the amount of unmodified MT content to 95%
* If translation is by copying the source and if unmodified content is above 60%,
* If translation is by copying the source, warning is shown to user and user explicitly suppress that warning. In this case we increased the amount of unmodified MT content to 75%

The number of problematic sections are counted for calculating the overall translation quality. There is a threshold which is configurable per wiki. For example if that threshold is 75%, it means, we allow publishing translations with 75% of sections being problematic as per above mentioned criteria.
This is documented in detail at https://www.mediawiki.org/wiki/Help:Content_translation/Translating/Translation_quality

