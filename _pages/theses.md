---
layout: topic
title: PhD Theses
---

## Mathematical Foundations of Equivariant Neural Networks
By Jimmy Aronsson

Deep learning has revolutionized industry and academic research. Over the
past decade, neural networks have been used to solve a multitude of previously
unsolved problems and to significantly improve the state of the art on other
tasks. However, training a neural network typically requires large amounts of
data and computational resources. This is not only costly, it also prevents deep
learning from being used for applications in which data is scarce. It is therefore
important to simplify the learning task by incorporating inductive biases - prior
knowledge and assumptions - into the neural network design.

Geometric deep learning aims to reduce the amount of information that neural
networks have to learn, by taking advantage of geometric properties in data. In
particular, equivariant neural networks use symmetries to reduce the complexity
of a learning task. Symmetries are properties that do not change under certain
transformations. For example, rotation-equivariant neural networks trained to
identify tumors in medical images are not sensitive to the orientation of a tumor
within an image. Another example is graph neural networks, i.e., permutation-
equivariant neural networks that operate on graphs, such as molecules or social
networks. Permuting the ordering of vertices and edges either transforms the
output of a graph neural network in a predictable way (equivariance), or has no
effect on the output (invariance).

In this thesis we study a fiber bundle theoretic framework for equivariant neural
networks. Fiber bundles are often used in mathematics and theoretical physics to
model nontrivial geometries, and offer a geometric approach to symmetry. This
framework connects to many different areas of mathematics, including Fourier
analysis, representation theory, and gauge theory, thus providing a large set of
tools for analyzing equivariant neural networks.

[Full thesis](/downloads/phd_theses/Jimmy_Aronsson.pdf){: .btn .btn-primary
.btn-sm}

## Geometry and Symmetry in Deep Learning: From Mathematical Foundations to Vision Applications
By Oscar Carlsson

Deep learning — particularly neural networks — has profoundly transformed both industry and academia. However, designing and training effective networks remains challenging, often requiring extensive data and compute. This barrier limits applicability of deep learning in domains with scarce labelled data or limited computational budgets. One way to overcome these barriers is to bake prior knowledge — such as geometry or symmetry — directly into network architectures.

Geometric deep learning focuses on model and data design by leveraging the knowledge of problem specific geometry and symmetries. Encoding this into the pipeline can reduce sample complexity as the models do not need to learn these structures directly from the data. Two common examples of this is equivariant and invariant networks. Equivariant networks guarantee that when the input is transformed the output transforms in a predictable way. On the other hand, an invariant network is a network where the output does not change if the input is transformed.

In this thesis we study both applied and mathematical perspectives on parts of the geometric deep learning field. On the mathematical side I show a theory for equivariant CNNs on (bi)principal bundles and a novel framework for equivariant non-linear maps. On the applied side the I present a study of the effects of imposed equivariance on the data requirements and the increased data efficiency as well as the benefits of using a grid well suited for the underlying geometry of the data.

[Full thesis](/downloads/phd_theses/o-carlsson.pdf){: .btn .btn-primary
.btn-sm}

