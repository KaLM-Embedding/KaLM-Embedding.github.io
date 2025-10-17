const KaLM_Content = {
    hero: {
        title: "KaLM-Embedding",
        subtitle: "A Versatile and Compact Multilingual Text Embedding Model",
        description: "Superior Training Data and Techniques Inspire Stronger Embedding Models"
    },
    features: [
        {
            icon: "fas fa-globe",
            title: "Multilingual Support",
            description: "Supports multiple languages with state-of-the-art performance in general-purpose text embedding tasks."
        },
        {
            icon: "fas fa-compress",
            title: "Compact & Efficient",
            description: "Lightweight and fast while maintaining impressive performance."
        },
        {
            icon: "fas fa-database",
            title: "Superior Training Data",
            description: "Leverages cleaner, more diverse, and domain-specific training data for enhanced quality."
        },
        {
            icon: "fas fa-rocket",
            title: "Advanced Techniques",
            description: "Employs cutting-edge training techniques to achieve versatile embedding capabilities."
        }
    ],
    models: [
        {
            name: "KaLM-embedding-multilingual-mini-instruct-v2.5",
            type: "Sentence Similarity • 0.5B Parameters",
            date: "October 2025",
            description: "Bidirectional • Distilled",
            link: "https://huggingface.co/KaLM-Embedding/KaLM-embedding-multilingual-mini-instruct-v2.5",
            is_latest: true
        },
        {
            name: "KaLM-embedding-multilingual-mini-instruct-v2",
            type: "Sentence Similarity • 0.5B Parameters",
            date: "June 2025",
            description: "Bidirectional",
            link: "https://huggingface.co/HIT-TMG/KaLM-embedding-multilingual-mini-instruct-v2",
            is_latest: false
        },
        {
            name: "KaLM-embedding-multilingual-mini-instruct-v1.5",
            type: "Sentence Similarity • 0.5B Parameters",
            date: "January 2025",
            description: "Causal Attention • Instruction",
            link: "https://huggingface.co/HIT-TMG/KaLM-embedding-multilingual-mini-instruct-v1.5",
            is_latest: false
        },
        {
            name: "KaLM-embedding-multilingual-mini-v1",
            type: "Sentence Similarity • 0.5B Parameters",
            date: "October 2024",
            description: "Causal Attention",
            link: "https://huggingface.co/HIT-TMG/KaLM-embedding-multilingual-mini-v1",
            is_latest: false
        },
        {
            name: "KaLM-embedding-multilingual-mini-instruct-v1",
            type: "Sentence Similarity • 0.5B Parameters",
            date: "October 2024",
            description: "Causal Attention • Instruction",
            link: "https://huggingface.co/HIT-TMG/KaLM-embedding-multilingual-mini-instruct-v1",
            is_latest: false
        },
        {
            name: "KaLM-embedding-multilingual-mini-unsupervised",
            type: "Sentence Similarity • 0.5B Parameters",
            date: "December 2024",
            description: "Unsupervised pre-trained model for research and fine-tuning purposes.",
            link: "https://huggingface.co/HIT-TMG/KaLM-embedding-multilingual-mini-unsupervised",
            is_latest: false
        }
    ],
    papers: [
        {
            title: "KaLM-Embedding-V2: Superior Training Techniques and Data Inspire A Versatile Embedding Model",
            arxiv_id: "2506.20923",
            date: "June 2025",
            description: "This paper proposes KaLM-Embedding-V2, a versatile and compact embedding model that achieves impressive performance in general-purpose text embedding tasks through systematic incentivization of advanced embedding techniques.",
            arxiv_link: "https://arxiv.org/abs/2506.20923",
            hf_link: "https://huggingface.co/papers/2506.20923",
            is_latest: true
        },
        {
            title: "KaLM-Embedding: Superior Training Data Brings A Stronger Embedding Model",
            arxiv_id: "2501.01028",
            date: "January 2025",
            description: "This work introduces KaLM-Embedding, a general multilingual embedding model that leverages a large quantity of cleaner, more diverse, and domain-specific training data to achieve superior performance.",
            arxiv_link: "https://arxiv.org/abs/2501.01028",
            hf_link: "https://huggingface.co/papers/2501.01028",
            is_latest: false
        }
    ],
    datasets: [
        {
            name: "KaLM-embedding-pretrain-data",
            description: "Large-scale weakly supervised pre-training data used to train a base model into an embedding model",
            link: "https://huggingface.co/datasets/HIT-TMG/KaLM-embedding-pretrain-data"
        },
        {
            name: "KaLM-embedding-finetuning-data",
            description: "Versatile, task-specific fine-tuning data for multi-domain and multi-task learning.",
            link: "https://huggingface.co/datasets/KaLM-Embedding/KaLM-embedding-finetuning-data"
        }
    ]
};
