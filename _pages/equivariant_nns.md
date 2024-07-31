---
layout: topic
title: Equivariant neural networks and geometric deep learning
publication_tags:
  - ENN
---

The notion of ''geometric deep learning" is often used as an umbrella term to
describe various approaches to geometric theory applied to deep learning. It
has been compared to the famous "Erlangen program" in mathematics, proposed by
Klein in 1872 as a ''unified theory of geometry'', connecting group theory, and
geometry in profound ways.

In a similar way, our research can be viewed as building a "unified
mathematical theory of deep learning'', bringing geometry, group theory,
representation theory and theoretical physics into the realm of machine
learning.

What is the  mathematical framework underlying deep learning? One promising
direction is to consider "symmetries"  as an underlying design principle for
network architectures. This can be implemented by  constructing  deep neural
networks on a group G that acts transitively on the input data. This is
directly relevant for instance in the case of spherical signals where G is
a rotation group. Even more generally,  it is natural to consider the question
of how to train neural networks in the case of "non-Euclidean data".

Relevant applications include omnidirectional computer vision, biomedicine, and
climate observations, just to mention a few situations where data is naturally
"non-flat". Mathematically, this calls for developing a theory of deep learning
on  manifolds, or even more exotic structures, like graphs or algebraic
varieties. A special class consists of homogeneous spaces G/H, where H is
a subgroup. The project aims to develop the mathematical framework for
equivariant neural networks. Below we describe this in some more detail.

[For a detailed mathematical account of this field, see our extensive review
article "Geometric deep learning and equivariant neural networks".]

## Group equivariant convolutional networks


The basic idea of deep learning is that  learning processes takes place in
multi-layer networks known as Deep Neural Networks (DNN) of "artificial
neurons", where each layer receives data from the preceding layer and processes
it before sending it to the subsequent layer.

Suppose one wishes to categorize some data sample X according to which class
Y it belongs to. As a simple example, the input sample X could be an image and
the output Y could be a binary classification of whether a dog or a cat is
present in the image. The first layers of a DNN would learn some basic
low-level features, such as edges and contours, which are then transferred as
input to the subsequent layers. These layers then learn more sophisticated
high-level features, such as combinations of edges, legs and ears. The learning
process takes place in the sequence of hidden layers, until finally producing
an output Y', to be compared with the correct image class Y. The better the
learning algorithm, the closer the DNN predictions Y' will be to Y on new data
samples it has not trained on. In short, one wishes to minimize the "loss
function", which measures the difference between the output Y' and the class Y.

Convolutional neural networks (CNNs) have been enormously successful in various
applications concerning image recognition and feature extraction. Roughly
speaking, convolutional neural networks are ordinary deep networks that
implement convolution in place of matrix multiplication. One of the main
reasons for their power is the built in "translation equivariance", which
implies that a translation of the pixels in an image produces an overall
translation of the convolution. Since each layer is translation equivariant all
representations will be translated when the input data is translated, resulting
in efficient weight sharing layer by layer throughout the network.

There are, however, many potential applications where invariance with respect
to other transformations, like rotations, are desired, and this is not captured
by ordinary convolutional neural networks. A striking example is
omnidirectional computer vision, which is relevant for autonomous cars or
drones.  Other examples range from protein structure analysis to cosmology.
This calls for the development of a general theory of convolutional neural
networks which are invariant, or, more generally, equivariant with respect to
arbitrary groups of transformations. This allows to import powerful techniques
from group theory and representation theory into deep learning.

## Deep learning on manifolds and connection with gauge theory
Taking symmetries of neural networks as a fundamental design principle, it is very
natural to consider the question of how to train neural networks in the case of
“non-flat” data. Relevant applications include fisheye cameras, biomedicine,
and cosmological data, just to mention a few situations where the data is
naturally curved. Mathematically, this calls for developing a theory of deep
learning on manifolds, or even more exotic structures, like graphs or algebraic
varieties. This rapidly growing research field is referred to as "geometric
deep learning". In mathematics we study manifolds using differential geometry
which is a generalization of calculus to curved spaces. For an arbitrary
manifold one cannot define global coordinates, i.e. coordinates that are the
same throughout. Instead one considers the manifold as a collection of local
regions, or "patches", in which we can define local coordinates. The full
manifold is then obtained by gluing these local patches in a consistent way.
Similarly, manifolds usually don't have global symmetries, but one needs to
consider local, or "gauge", symmetries that act separately within each patch.
For convolutional networks a theory of gauge equivariant CNNs has been proposed
with inspiration from the physics of gauge theories and general relativity. The
basic feature here is to consider convolutions which are equivariant with
respect to local transformations, meaning that they can vary over the manifold.
Such transformations are called gauge transformations in physics, hence the
name.

