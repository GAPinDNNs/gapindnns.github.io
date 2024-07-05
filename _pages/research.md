---
layout: topic
title: Research
---

In the GAPinDNNs research group, we explore the interface of Geometry, Algebra,
and Physics with Deep Neural Networks. Specifically, we use techniques and
ideas from pure mathematics and theoretical physics to develop the foundations
of deep learning and deep neural networks.

Deep learning, a cornerstone of modern machine learning, has achieved
remarkable success across numerous applications by enabling computers to
identify and replicate complex patterns directly from data. However, this
success is mainly based en empirical observations. Despite its efficacy, the
theoretical underpinnings of deep neural networks are not well-understood. This
lack of understanding means that progress is driven mainly by trial and error,
which is not only slow but also lacks the rigor necessary for applications
requiring high reliability and interpretability, such as in medicine or law.

Our research is motivated by the assertion that adopting mathematical and
physical theories could bridge this gap. These disciplines offer sophisticated
tools for analyzing complex systems, which can be of great benefit for the
study of machine learning. By integrating these tools, we aim towards a more
systematic and interpretable approach to deep learning. This research program
not only promises to make deep learning more efficient and robust but also
opens up new possibilities for its application in areas where precision and
trustworthiness are critical.

While our research requires sophisticated theoretical developments, it also
brings forth numerous applications. In particular, any setting where data
naturally belong to a curved space provides an arena for implementing ideas and
results from geometric deep learning. Autonomous driving is a prime example. To
identify traffic situations from different angles requires neural networks with
rotational symmetry. Other potential applications include cosmological data
analysis and climate pattern segmentation.
{: .mb-4 }



{% include research_topic_card.html
title="Equivariant neural networks and geometric deep learning"
image="/assets/images/gdl_equiv_nn.png"
url="/_pages/equivariant_nns.html"
description='The notion of "geometric deep learning" is
        often used as an umbrella term to describe various approaches to geometric
        theory applied to deep learning. It has been compared to the famous "Erlangen
        program" in mathematics, proposed by Klein in 1872 as a "unified theory of
        geometry", connecting group theory, and geometry in profound ways.'
%}

{% include research_topic_card.html
title="Spherical computer vision and equivariant transformers"
image="/assets/images/spherical_cv_semi_transp.png"
url="/_pages/spherical_cv.html"
description='Transformer networks are a type of neural network architecture that
          have been widely used in natural language processing (NLP) tasks such as
          machine translation and language modelling. They were introduced in the paper
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
          behind Open AI\'s immensely popular chat bot "chatGPT"'
%}

{% include research_topic_card.html
title="Wide neural networks and neural tangent kernels"
image="/assets/images/NNEFT_feynman.png"
url="/_pages/wide_nns.html"
description='A solid theoretical understanding of deep neural networks is
  lacking at the moment. This is because, although the building blocks of neural
  networks are simple, their collective behavior is very complex. Mathematically,
  this complexity is captured by a non-linear, time-evolving object called the
  neural tangent kernel, which enters into the training dynamics.'
%}

