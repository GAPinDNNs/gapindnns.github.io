---
layout: topic
title: Spherical computer vision and equivariant transformers
publication_tags: SCV
---

Transformer networks are a type of neural network architecture that have been
widely used in natural language processing (NLP) tasks such as machine
translation and language modeling. They were introduced in the paper
"Attention is all you need" by Vaswani et al. One key feature of transformer
networks is their use of self-attention mechanisms, which allow the network to
selectively weight the importance of different input elements when processing
them. This allows transformer networks to capture long-range dependencies and
relationships within a sequence of data, such as in a sentence or paragraph of
text. Another notable feature of transformer networks is their ability to
process input data in parallel, using multi-headed attention mechanisms. This
allows them to achieve high computational efficiency and fast training times,
making them particularly well-suited for large-scale NLP tasks. Overall,
transformer networks have achieved state-of-the-art results on a wide range of
NLP tasks and have become a key tool for researchers and practitioners in the
field. In particular, transformers form the foundation for the algorithm
behind Open AI's immensely popular chat bot "chatGPT".

Though very successful for language-related tasks, transformers are not ideal
for dealing with images due to their linear structure. However, in 2020 the
"vision transformer" (ViT) was introduced. It was designed to a transformer
for computer vision applications, rather than for language processing. The
main idea is to split an image into patches, from which lower-dimensional
embeddings are produced. This results in a sequence that can be fed into
a standard transformer encoder. Despite its promise the ViT suffered from
several shortcomings. In particular, they struggle with high resolution images
since since its computational complexity is "quadratic" in its image size.
The "swin transformer" resolves these issues, representing an improved variant
of the ViT with superior performance. One key feature of Swin transformers is
their use of local self-attention mechanisms, which allow the network to
selectively weight the importance of different spatial regions within an image
when processing it. This enables the network to capture fine-grained details
and spatial relationships within the image, which is important for tasks such
as image recognition. Overall, swin transformers offer a promising approach
for image recognition tasks and have the potential to find wide-ranging
applications in fields such as computer vision and robotics.
 
As we have discussed above, for image recognition, equivariance implies that
you can recognize an object in an image even if its appearance or position
changes. A standard transformer, on the other hand, is by definition
"permutation invariant". However it cannot recognize grid structured data. In
order to implement some kind of more general group equivariance it seems
natural to take the Swin transformer as a starting point. The Swin transformer
introduces a division of an image into a set of "windows" and each window
contains a (fixed) number of patches. One of the key advantages is the use of
window based self attention, in which the attention of each patch is computed
only with respect to the other patches in the same window. This is in contrast
to the ViT which computes the self attention of every patch with respect to
every other patch. Since the window size is fixed throughout the network, this
results in linear computational complexity with respect to the number of
patches. This is an amazing improvement with respect to the ViT. The name
"Swin" comes from "shifting windows", which is the mechanism that introduces
cross-window connections: each window is shifted by a certain factor toward the
bottom right corner of the image. This has been found to significantly improve
the performance of the network. 


On the theoretical side of this project, we explore and develop the
mathematical foundations of "equivariant transformers". We are currently
focussing on the developing an equivariant version of the Swin transformer.
There are strong analogies between the Swin transformer and the differential
geometric structure of manifolds. As we have mentioned above, Swin transformers
treats images as consisting of grids of patches organized in terms of windows
that can shift across the image. This structure therefore appears very amenable
for generalizations to Swin transformer on manifolds, to wit, a "gauge
equivariant Swin transformer". This can be viewed as a long term theoretical
goal of our this research project. 
