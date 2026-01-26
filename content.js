const KaLM_Content = {
  hero: {
    title: "KaLM-Embedding",
    subtitle: "A Versatile and Compact Multilingual Text Embedding Model",
    description:
      "Superior Training Data and Techniques Inspire Stronger Embedding Models",
  },
  features: [
    {
      icon: "fas fa-globe",
      title: "Multilingual Support",
      description:
        "Supports multiple languages with state-of-the-art performance in general-purpose text embedding tasks.",
    },
    {
      icon: "fas fa-compress",
      title: "Compact & Efficient",
      description:
        "Lightweight and fast while maintaining impressive performance.",
    },
    {
      icon: "fas fa-database",
      title: "Superior Training Data",
      description:
        "Leverages cleaner, more diverse, and domain-specific training data for enhanced quality.",
    },
    {
      icon: "fas fa-rocket",
      title: "Advanced Techniques",
      description:
        "Employs cutting-edge training techniques to achieve versatile embedding capabilities.",
    },
  ],
  models: [
    {
      name: "KaLM-Embedding-Gemma3-12B-2511",
      type: "Sentence Similarity • 11.7B Parameters",
      date: "November 2025",
      description: "Multilingual• Large Scale",
      link: "https://huggingface.co/tencent/KaLM-Embedding-Gemma3-12B-2511",
      is_latest: true,
    },
    {
      name: "KaLM-embedding-multilingual-mini-instruct-v2.5",
      type: "Sentence Similarity • 0.5B Parameters",
      date: "October 2025",
      description: "Bidirectional • Distilled",
      link: "https://huggingface.co/KaLM-Embedding/KaLM-embedding-multilingual-mini-instruct-v2.5",
      is_latest: true,
    },
    {
      name: "KaLM-embedding-multilingual-mini-instruct-v2",
      type: "Sentence Similarity • 0.5B Parameters",
      date: "June 2025",
      description: "Bidirectional",
      link: "https://huggingface.co/HIT-TMG/KaLM-embedding-multilingual-mini-instruct-v2",
      is_latest: false,
    },
    {
      name: "KaLM-embedding-multilingual-mini-instruct-v1.5",
      type: "Sentence Similarity • 0.5B Parameters",
      date: "January 2025",
      description: "Causal Attention • Instruction",
      link: "https://huggingface.co/HIT-TMG/KaLM-embedding-multilingual-mini-instruct-v1.5",
      is_latest: false,
    },
    {
      name: "KaLM-embedding-multilingual-mini-v1",
      type: "Sentence Similarity • 0.5B Parameters",
      date: "October 2024",
      description: "Causal Attention",
      link: "https://huggingface.co/HIT-TMG/KaLM-embedding-multilingual-mini-v1",
      is_latest: false,
    },
    {
      name: "KaLM-embedding-multilingual-mini-instruct-v1",
      type: "Sentence Similarity • 0.5B Parameters",
      date: "October 2024",
      description: "Causal Attention • Instruction",
      link: "https://huggingface.co/HIT-TMG/KaLM-embedding-multilingual-mini-instruct-v1",
      is_latest: false,
    },
    {
      name: "KaLM-embedding-multilingual-mini-unsupervised",
      type: "Sentence Similarity • 0.5B Parameters",
      date: "December 2024",
      description:
        "Unsupervised pre-trained model for research and fine-tuning purposes.",
      link: "https://huggingface.co/HIT-TMG/KaLM-embedding-multilingual-mini-unsupervised",
      is_latest: false,
    },
  ],
  papers: [
    {
      title:
        "KaLM-Embedding-V2: Superior Training Techniques and Data Inspire A Versatile Embedding Model",
      arxiv_id: "2506.20923",
      date: "June 2025",
      description:
        "This paper proposes KaLM-Embedding-V2, a versatile and compact embedding model that achieves impressive performance in general-purpose text embedding tasks through systematic incentivization of advanced embedding techniques.",
      arxiv_link: "https://arxiv.org/abs/2506.20923",
      hf_link: "https://huggingface.co/papers/2506.20923",
      is_latest: true,
    },
    {
      title:
        "KaLM-Embedding: Superior Training Data Brings A Stronger Embedding Model",
      arxiv_id: "2501.01028",
      date: "January 2025",
      description:
        "This work introduces KaLM-Embedding, a general multilingual embedding model that leverages a large quantity of cleaner, more diverse, and domain-specific training data to achieve superior performance.",
      arxiv_link: "https://arxiv.org/abs/2501.01028",
      hf_link: "https://huggingface.co/papers/2501.01028",
      is_latest: false,
    },
  ],
  survey_papers: [
    {
      title:
        "On The Role of Pretrained Language Models in General-Purpose Text Embeddings: A Survey",
      arxiv_id: "2507.20783",
      date: "July 2025",
      description:
        "Text embeddings have attracted growing interest due to their effectiveness across a wide range of natural language processing (NLP) tasks, including retrieval, classification, clustering, bitext mining, and summarization. With the emergence of pretrained language models (PLMs), general-purpose text embeddings (GPTE) have gained significant traction for their ability to produce rich, transferable representations. The general architecture of GPTE typically leverages PLMs to derive dense text representations, which are then optimized through contrastive learning on large-scale pairwise datasets. In this survey, we provide a comprehensive overview of GPTE in the era of PLMs, focusing on the roles PLMs play in driving its development. We first examine the fundamental architecture and describe the basic roles of PLMs in GPTE, i.e., embedding extraction, expressivity enhancement, training strategies, learning objectives, and data construction. We then describe advanced roles enabled by PLMs, including multilingual support, multimodal integration, code understanding, and scenario-specific adaptation. Finally, we highlight potential future research directions that move beyond traditional improvement goals, including ranking integration, safety considerations, bias mitigation, structural information incorporation, and the cognitive extension of embeddings. This survey aims to serve as a valuable reference for both newcomers and established researchers seeking to understand the current state and future potential of GPTE.",
      arxiv_link: "https://arxiv.org/abs/2507.20783",
      github_link: "https://github.com/HITsz-TMG/Text-Embedding-Survey",
    },
  ],
  datasets: [
    {
      name: "KaLM-embedding-pretrain-data",
      description:
        "Large-scale weakly supervised pre-training data used to train a base model into an embedding model",
      link: "https://huggingface.co/datasets/HIT-TMG/KaLM-embedding-pretrain-data",
    },
    {
      name: "KaLM-embedding-finetuning-data",
      description:
        "Versatile, task-specific fine-tuning data for multi-domain and multi-task learning.",
      link: "https://huggingface.co/datasets/KaLM-Embedding/KaLM-embedding-finetuning-data",
    },
  ],
};