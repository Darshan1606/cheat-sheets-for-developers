import { useState } from "react";
import { Icon } from "./Icon";

const AIMLCheatSheet = () => {
  const [copiedCmd, setCopiedCmd] = useState(null);

  const copyToClipboard = (cmd) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const sections = [
    {
      title: "NumPy Basics",
      icon: "list",
      color: "blue",
      commands: [
        { cmd: "import numpy as np", desc: "Import NumPy" },
        { cmd: "np.array([1, 2, 3])", desc: "Create array from list" },
        { cmd: "np.zeros((3, 3))", desc: "Array of zeros" },
        { cmd: "np.ones((3, 3))", desc: "Array of ones" },
        { cmd: "np.eye(3)", desc: "Identity matrix" },
        { cmd: "np.arange(0, 10, 2)", desc: "Range array with step" },
        { cmd: "np.linspace(0, 1, 5)", desc: "Evenly spaced array" },
        { cmd: "np.random.rand(3, 3)", desc: "Random uniform 0-1" },
        { cmd: "np.random.randn(3, 3)", desc: "Random normal distribution" },
        { cmd: "arr.shape", desc: "Array dimensions" },
        { cmd: "arr.reshape(3, 4)", desc: "Reshape array" },
        { cmd: "arr.T", desc: "Transpose array" },
      ],
    },
    {
      title: "NumPy Operations",
      icon: "cpu",
      color: "green",
      commands: [
        { cmd: "arr + arr2", desc: "Element-wise addition" },
        { cmd: "arr * arr2", desc: "Element-wise multiplication" },
        { cmd: "np.dot(arr, arr2)", desc: "Matrix multiplication" },
        { cmd: "arr @ arr2", desc: "Matrix mult (Python 3.5+)" },
        { cmd: "np.sum(arr)", desc: "Sum all elements" },
        { cmd: "np.mean(arr, axis=0)", desc: "Mean along axis" },
        { cmd: "np.std(arr)", desc: "Standard deviation" },
        { cmd: "np.max(arr), np.min(arr)", desc: "Max and min values" },
        { cmd: "np.argmax(arr)", desc: "Index of maximum" },
        { cmd: "np.argmin(arr)", desc: "Index of minimum" },
        { cmd: "arr[arr > 5]", desc: "Boolean indexing" },
        { cmd: "np.where(condition, x, y)", desc: "Conditional select" },
        { cmd: "np.concatenate([a, b], axis=0)", desc: "Concatenate arrays" },
      ],
    },
    {
      title: "Pandas Basics",
      icon: "table",
      color: "purple",
      commands: [
        { cmd: "import pandas as pd", desc: "Import Pandas" },
        { cmd: "pd.DataFrame(data)", desc: "Create DataFrame" },
        { cmd: "pd.read_csv('file.csv')", desc: "Read CSV file" },
        { cmd: "df.to_csv('file.csv', index=False)", desc: "Save to CSV" },
        { cmd: "df.head(), df.tail()", desc: "First/last 5 rows" },
        { cmd: "df.shape", desc: "Get (rows, columns)" },
        { cmd: "df.info()", desc: "Data types & null counts" },
        { cmd: "df.describe()", desc: "Statistics summary" },
        { cmd: "df.columns", desc: "Column names" },
        { cmd: "df['column']", desc: "Select single column" },
        { cmd: "df[['col1', 'col2']]", desc: "Select multiple columns" },
        { cmd: "df.iloc[0:5]", desc: "Select rows by index" },
        { cmd: "df.loc[df['col'] > 5]", desc: "Select by condition" },
      ],
    },
    {
      title: "Pandas Wrangling",
      icon: "filter",
      color: "orange",
      commands: [
        { cmd: "df.dropna()", desc: "Drop rows with null values" },
        { cmd: "df.fillna(value)", desc: "Fill null with value" },
        { cmd: "df.drop('col', axis=1)", desc: "Drop column" },
        { cmd: "df.rename(columns={'old': 'new'})", desc: "Rename columns" },
        { cmd: "df.groupby('col').mean()", desc: "Group and aggregate" },
        { cmd: "df.merge(df2, on='key')", desc: "Merge DataFrames" },
        { cmd: "pd.concat([df1, df2])", desc: "Concatenate DataFrames" },
        { cmd: "df.pivot_table(values, index, columns)", desc: "Create pivot table" },
        { cmd: "df.apply(func)", desc: "Apply function to columns" },
        { cmd: "df['col'].map(dict)", desc: "Map values using dict" },
        { cmd: "df.sort_values('col', ascending=False)", desc: "Sort by column" },
        { cmd: "df.drop_duplicates()", desc: "Remove duplicate rows" },
      ],
    },
    {
      title: "Data Preprocessing",
      icon: "settings",
      color: "cyan",
      commands: [
        { cmd: "from sklearn.preprocessing import StandardScaler", desc: "Import StandardScaler" },
        { cmd: "scaler = StandardScaler()", desc: "Zero mean, unit variance" },
        { cmd: "X_scaled = scaler.fit_transform(X)", desc: "Fit and transform data" },
        { cmd: "scaler.transform(X_test)", desc: "Transform test data only" },
        { cmd: "from sklearn.preprocessing import MinMaxScaler", desc: "Import MinMaxScaler" },
        { cmd: "MinMaxScaler()", desc: "Scale features to 0-1" },
        { cmd: "from sklearn.preprocessing import LabelEncoder", desc: "Import LabelEncoder" },
        { cmd: "le.fit_transform(y)", desc: "Encode string labels" },
        { cmd: "from sklearn.preprocessing import OneHotEncoder", desc: "Import OneHotEncoder" },
        { cmd: "ohe.fit_transform(X)", desc: "One-hot encode categories" },
        { cmd: "pd.get_dummies(df, columns=['col'])", desc: "Pandas one-hot encoding" },
      ],
    },
    {
      title: "Train/Test & CV",
      icon: "git-branch",
      color: "yellow",
      commands: [
        { cmd: "from sklearn.model_selection import train_test_split", desc: "Import train_test_split" },
        { cmd: "X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)", desc: "Split data 80/20" },
        { cmd: "from sklearn.model_selection import cross_val_score", desc: "Import cross_val_score" },
        { cmd: "scores = cross_val_score(model, X, y, cv=5)", desc: "5-fold cross-validation" },
        { cmd: "scores.mean()", desc: "Average CV score" },
        { cmd: "from sklearn.model_selection import GridSearchCV", desc: "Import GridSearchCV" },
        { cmd: "grid = GridSearchCV(model, param_grid, cv=5)", desc: "Grid search with CV" },
        { cmd: "grid.fit(X, y)", desc: "Find best parameters" },
        { cmd: "grid.best_params_", desc: "Get best parameters" },
        { cmd: "grid.best_score_", desc: "Get best score" },
      ],
    },
    {
      title: "Linear Models",
      icon: "activity",
      color: "red",
      commands: [
        { cmd: "from sklearn.linear_model import LinearRegression", desc: "Import LinearRegression" },
        { cmd: "model = LinearRegression()", desc: "Create linear regression" },
        { cmd: "model.fit(X_train, y_train)", desc: "Train the model" },
        { cmd: "model.predict(X_test)", desc: "Make predictions" },
        { cmd: "model.coef_", desc: "Get coefficients" },
        { cmd: "model.intercept_", desc: "Get intercept" },
        { cmd: "from sklearn.linear_model import LogisticRegression", desc: "Import LogisticRegression" },
        { cmd: "LogisticRegression()", desc: "Binary/multi classification" },
        { cmd: "model.predict_proba(X_test)", desc: "Get probabilities" },
        { cmd: "from sklearn.linear_model import Ridge", desc: "L2 regularization" },
        { cmd: "from sklearn.linear_model import Lasso", desc: "L1 regularization" },
        { cmd: "Ridge(alpha=1.0)", desc: "Ridge with alpha" },
      ],
    },
    {
      title: "Tree-Based Models",
      icon: "git-branch",
      color: "blue",
      commands: [
        { cmd: "from sklearn.tree import DecisionTreeClassifier", desc: "Import DecisionTree" },
        { cmd: "DecisionTreeClassifier(max_depth=5)", desc: "Create decision tree" },
        { cmd: "from sklearn.ensemble import RandomForestClassifier", desc: "Import RandomForest" },
        { cmd: "RandomForestClassifier(n_estimators=100)", desc: "Create random forest" },
        { cmd: "rf.feature_importances_", desc: "Get feature importance" },
        { cmd: "from sklearn.ensemble import GradientBoostingClassifier", desc: "Import GradientBoosting" },
        { cmd: "GradientBoostingClassifier()", desc: "Create gradient boosting" },
        { cmd: "import xgboost as xgb", desc: "Import XGBoost" },
        { cmd: "xgb.XGBClassifier()", desc: "Create XGBoost model" },
        { cmd: "import lightgbm as lgb", desc: "Import LightGBM" },
        { cmd: "lgb.LGBMClassifier()", desc: "Create LightGBM model" },
      ],
    },
    {
      title: "Evaluation Metrics",
      icon: "bar-chart",
      color: "green",
      commands: [
        { cmd: "from sklearn.metrics import accuracy_score", desc: "Import accuracy_score" },
        { cmd: "accuracy_score(y_true, y_pred)", desc: "Classification accuracy" },
        { cmd: "from sklearn.metrics import precision_score", desc: "Import precision_score" },
        { cmd: "precision_score(y_true, y_pred)", desc: "Precision score" },
        { cmd: "from sklearn.metrics import recall_score", desc: "Import recall_score" },
        { cmd: "recall_score(y_true, y_pred)", desc: "Recall score" },
        { cmd: "from sklearn.metrics import f1_score", desc: "Import f1_score" },
        { cmd: "f1_score(y_true, y_pred)", desc: "F1 score" },
        { cmd: "from sklearn.metrics import confusion_matrix", desc: "Import confusion_matrix" },
        { cmd: "confusion_matrix(y_true, y_pred)", desc: "Confusion matrix" },
        { cmd: "from sklearn.metrics import mean_squared_error", desc: "Import MSE" },
        { cmd: "mean_squared_error(y_true, y_pred)", desc: "MSE for regression" },
        { cmd: "from sklearn.metrics import r2_score", desc: "R² coefficient" },
        { cmd: "from sklearn.metrics import roc_auc_score", desc: "AUC-ROC score" },
      ],
    },
    {
      title: "Clustering & PCA",
      icon: "circle-dot",
      color: "purple",
      commands: [
        { cmd: "from sklearn.cluster import KMeans", desc: "Import KMeans" },
        { cmd: "kmeans = KMeans(n_clusters=3)", desc: "Create KMeans clusterer" },
        { cmd: "kmeans.fit(X)", desc: "Fit to data" },
        { cmd: "kmeans.labels_", desc: "Get cluster labels" },
        { cmd: "kmeans.cluster_centers_", desc: "Get centroids" },
        { cmd: "from sklearn.cluster import DBSCAN", desc: "Import DBSCAN" },
        { cmd: "DBSCAN(eps=0.5, min_samples=5)", desc: "Density-based clustering" },
        { cmd: "from sklearn.decomposition import PCA", desc: "Import PCA" },
        { cmd: "pca = PCA(n_components=2)", desc: "Reduce to 2 dimensions" },
        { cmd: "X_pca = pca.fit_transform(X)", desc: "Fit and transform" },
        { cmd: "pca.explained_variance_ratio_", desc: "Variance explained" },
        { cmd: "from sklearn.manifold import TSNE", desc: "Import t-SNE" },
        { cmd: "TSNE(n_components=2)", desc: "t-SNE visualization" },
      ],
    },
    {
      title: "PyTorch Basics",
      icon: "zap",
      color: "orange",
      commands: [
        { cmd: "import torch", desc: "Import PyTorch" },
        { cmd: "import torch.nn as nn", desc: "Import neural network module" },
        { cmd: "torch.tensor([1, 2, 3])", desc: "Create tensor from list" },
        { cmd: "torch.zeros(3, 3)", desc: "Tensor of zeros" },
        { cmd: "torch.ones(3, 3)", desc: "Tensor of ones" },
        { cmd: "torch.randn(3, 3)", desc: "Random normal tensor" },
        { cmd: "x.to('cuda')", desc: "Move tensor to GPU" },
        { cmd: "x.to('cpu')", desc: "Move tensor to CPU" },
        { cmd: "x.numpy()", desc: "Convert to NumPy array" },
        { cmd: "torch.from_numpy(arr)", desc: "Create from NumPy" },
        { cmd: "x.requires_grad_(True)", desc: "Enable gradient tracking" },
        { cmd: "x.shape, x.dtype", desc: "Get shape and dtype" },
      ],
    },
    {
      title: "PyTorch Training",
      icon: "refresh-cw",
      color: "cyan",
      commands: [
        { cmd: "class Model(nn.Module):", desc: "Define model class" },
        { cmd: "def __init__(self): super().__init__()", desc: "Initialize parent" },
        { cmd: "self.fc = nn.Linear(10, 1)", desc: "Define layers" },
        { cmd: "def forward(self, x): return self.fc(x)", desc: "Forward pass" },
        { cmd: "criterion = nn.MSELoss()", desc: "Loss function" },
        { cmd: "optimizer = torch.optim.Adam(model.parameters(), lr=0.001)", desc: "Optimizer" },
        { cmd: "optimizer.zero_grad()", desc: "Clear gradients" },
        { cmd: "loss = criterion(outputs, y)", desc: "Compute loss" },
        { cmd: "loss.backward()", desc: "Backward pass" },
        { cmd: "optimizer.step()", desc: "Update weights" },
        { cmd: "torch.save(model.state_dict(), 'model.pth')", desc: "Save model" },
        { cmd: "model.load_state_dict(torch.load('model.pth'))", desc: "Load model" },
        { cmd: "model.eval()", desc: "Set evaluation mode" },
      ],
    },
    {
      title: "TensorFlow/Keras",
      icon: "layers",
      color: "yellow",
      commands: [
        { cmd: "import tensorflow as tf", desc: "Import TensorFlow" },
        { cmd: "from tensorflow import keras", desc: "Import Keras" },
        { cmd: "from keras import layers", desc: "Import layers" },
        { cmd: "model = keras.Sequential([...])", desc: "Sequential model" },
        { cmd: "layers.Dense(64, activation='relu')", desc: "Dense layer" },
        { cmd: "layers.Dropout(0.2)", desc: "Dropout layer" },
        { cmd: "layers.Conv2D(32, (3,3), activation='relu')", desc: "Conv2D layer" },
        { cmd: "layers.MaxPooling2D((2,2))", desc: "MaxPooling layer" },
        { cmd: "layers.Flatten()", desc: "Flatten layer" },
        { cmd: "model.compile(optimizer='adam', loss='...', metrics=['accuracy'])", desc: "Compile model" },
        { cmd: "model.fit(X, y, epochs=10, batch_size=32)", desc: "Train model" },
        { cmd: "model.evaluate(X_test, y_test)", desc: "Evaluate model" },
        { cmd: "model.predict(X_new)", desc: "Make predictions" },
        { cmd: "model.save('model.h5')", desc: "Save model" },
      ],
    },
    {
      title: "NN Layers (PyTorch)",
      icon: "network",
      color: "red",
      commands: [
        { cmd: "nn.Linear(in_features, out_features)", desc: "Fully connected layer" },
        { cmd: "nn.Conv2d(in_channels, out_channels, kernel_size)", desc: "2D convolution" },
        { cmd: "nn.MaxPool2d(kernel_size)", desc: "Max pooling" },
        { cmd: "nn.BatchNorm2d(num_features)", desc: "Batch normalization" },
        { cmd: "nn.Dropout(p=0.5)", desc: "Dropout layer" },
        { cmd: "nn.LSTM(input_size, hidden_size)", desc: "LSTM layer" },
        { cmd: "nn.GRU(input_size, hidden_size)", desc: "GRU layer" },
        { cmd: "nn.Embedding(num_embeddings, embedding_dim)", desc: "Embedding layer" },
        { cmd: "nn.ReLU()", desc: "ReLU activation" },
        { cmd: "nn.Sigmoid()", desc: "Sigmoid activation" },
        { cmd: "nn.Softmax(dim=1)", desc: "Softmax activation" },
        { cmd: "nn.CrossEntropyLoss()", desc: "Cross-entropy loss" },
        { cmd: "nn.BCELoss()", desc: "Binary cross-entropy" },
      ],
    },
    {
      title: "NLP & Transformers",
      icon: "file-text",
      color: "purple",
      commands: [
        { cmd: "from sklearn.feature_extraction.text import CountVectorizer", desc: "Bag of words" },
        { cmd: "cv = CountVectorizer()", desc: "Create vectorizer" },
        { cmd: "X = cv.fit_transform(texts)", desc: "Transform texts" },
        { cmd: "from sklearn.feature_extraction.text import TfidfVectorizer", desc: "TF-IDF" },
        { cmd: "tfidf = TfidfVectorizer()", desc: "Create TF-IDF vectorizer" },
        { cmd: "from transformers import AutoTokenizer", desc: "Hugging Face tokenizer" },
        { cmd: "tokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')", desc: "Load BERT tokenizer" },
        { cmd: "tokens = tokenizer(text, return_tensors='pt')", desc: "Tokenize text" },
        { cmd: "from transformers import AutoModel", desc: "Hugging Face model" },
        { cmd: "model = AutoModel.from_pretrained('bert-base-uncased')", desc: "Load BERT model" },
        { cmd: "outputs = model(**tokens)", desc: "Get embeddings" },
        { cmd: "from transformers import pipeline", desc: "Easy inference" },
        { cmd: "pipe = pipeline('sentiment-analysis')", desc: "Sentiment pipeline" },
      ],
    },
    {
      title: "Tips & Best Practices",
      icon: "sparkles",
      color: "gray",
      commands: [
        { cmd: "# Always scale features before training", desc: "Preprocessing tip" },
        { cmd: "# Split data BEFORE any preprocessing", desc: "Avoid data leakage" },
        { cmd: "# Use random_state for reproducibility", desc: "Reproducible results" },
        { cmd: "# Start simple, increase complexity", desc: "Model selection" },
        { cmd: "# Monitor train vs val loss", desc: "Detect overfitting" },
        { cmd: "# Use early stopping", desc: "Prevent overfitting" },
        { cmd: "# Batch normalization for deep nets", desc: "Training stability" },
        { cmd: "# Dropout for regularization", desc: "Reduce overfitting" },
        { cmd: "# Learning rate scheduling", desc: "Better convergence" },
        { cmd: "# Data augmentation for images", desc: "Increase training data" },
        { cmd: "# Cross-validation for model selection", desc: "Robust evaluation" },
        { cmd: "# Ensemble methods for accuracy", desc: "Combine models" },
      ],
    },
  ];

  const quickRef = [
    { term: "X", desc: "Features/Input" },
    { term: "y", desc: "Labels/Target" },
    { term: "epoch", desc: "Full data pass" },
    { term: "batch", desc: "Data subset" },
    { term: "lr", desc: "Learning rate" },
    { term: "loss", desc: "Error measure" },
    { term: "grad", desc: "Gradient" },
    { term: "CV", desc: "Cross-validation" },
  ];

  const colorClasses = {
    purple: {
      badge: "bg-purple-subtle text-purple",
      header: "text-purple",
      border: "border-purple/20",
    },
    blue: {
      badge: "bg-blue-subtle text-blue",
      header: "text-blue",
      border: "border-blue/20",
    },
    green: {
      badge: "bg-green-subtle text-green",
      header: "text-green",
      border: "border-green/20",
    },
    orange: {
      badge: "bg-orange-subtle text-orange",
      header: "text-orange",
      border: "border-orange/20",
    },
    cyan: {
      badge: "bg-cyan-subtle text-cyan",
      header: "text-cyan",
      border: "border-cyan/20",
    },
    yellow: {
      badge: "bg-yellow-subtle text-yellow",
      header: "text-yellow",
      border: "border-yellow/20",
    },
    red: {
      badge: "bg-red-subtle text-red",
      header: "text-red",
      border: "border-red/20",
    },
    gray: {
      badge: "bg-gray-subtle text-gray",
      header: "text-gray",
      border: "border-gray/20",
    },
  };

  return (
    <div className="min-h-screen bg-bg-primary px-4 md:px-6 lg:px-8 pb-4 md:pb-6 lg:pb-8 pt-24 md:pt-28 print:p-4 print:pt-4">
      {/* Header */}
      <header className="max-w-[1800px] mx-auto mb-8 print:mb-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow/20 blur-xl rounded-full" />
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow/20 to-orange/20 border border-border-default flex items-center justify-center print:w-10 print:h-10">
                <Icon
                  name="sparkles"
                  className="w-7 h-7 text-yellow print:w-5 print:h-5"
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-text-primary print:text-xl tracking-tight">
                AI / ML Cheat Sheet
              </h1>
              <p className="text-sm text-text-secondary mt-0.5">
                Machine Learning with Python reference
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 print:hidden">
            <div className="text-xs text-text-muted px-4 py-2 bg-bg-secondary rounded-lg border border-border-default">
              Press{" "}
              <kbd className="mx-1 px-1.5 py-0.5 bg-bg-tertiary rounded text-text-secondary">
                Ctrl
              </kbd>
              +
              <kbd className="px-1.5 py-0.5 bg-bg-tertiary rounded text-text-secondary">
                P
              </kbd>{" "}
              to print
            </div>
          </div>
        </div>
      </header>

      {/* Quick Reference Bar */}
      <div className="max-w-[1800px] mx-auto mb-8 print:mb-4">
        <div className="bg-bg-secondary/50 backdrop-blur-sm border border-border-default rounded-2xl p-5 print:p-3 print:rounded-lg">
          <div className="flex items-center gap-2 mb-4 print:mb-2">
            <Icon name="sparkles" className="w-4 h-4 text-yellow" />
            <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider print:text-[10px]">
              ML Terminology
            </h3>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 print:gap-x-4 print:gap-y-1">
            {quickRef.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm print:text-[10px]"
              >
                <code className="px-2 py-1 bg-bg-tertiary/80 rounded-md text-yellow font-mono text-xs print:text-[9px] print:px-1 border border-border-subtle">
                  {item.term}
                </code>
                <span className="text-text-secondary">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <main className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 print:grid-cols-4 print:gap-3">
          {sections.map((section, idx) => (
            <section
              key={idx}
              className={`bg-bg-secondary/50 backdrop-blur-sm border border-border-default rounded-2xl overflow-hidden print:rounded-lg print:break-inside-avoid hover:border-border-default/80 transition-all duration-300 ${colorClasses[section.color].border}`}
            >
              {/* Section Header */}
              <div className="px-4 py-3 border-b border-border-subtle flex items-center gap-3 print:px-3 print:py-2">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center print:w-5 print:h-5 ${colorClasses[section.color].badge}`}
                >
                  <Icon
                    name={section.icon}
                    className="w-4 h-4 print:w-3 print:h-3"
                  />
                </div>
                <h2
                  className={`font-semibold text-sm print:text-[10px] ${colorClasses[section.color].header}`}
                >
                  {section.title}
                </h2>
              </div>

              {/* Commands */}
              <div className="divide-y divide-border-subtle">
                {section.commands.map((item, i) => (
                  <div
                    key={i}
                    className="group px-4 py-2.5 hover:bg-bg-tertiary/30 transition-colors print:px-3 print:py-1.5 cursor-pointer"
                    onClick={() => copyToClipboard(item.cmd)}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <code className="block text-xs font-mono text-yellow break-all print:text-[8px] print:leading-tight leading-relaxed whitespace-pre-wrap">
                        {item.cmd}
                      </code>
                      <button
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-bg-elevated rounded print:hidden flex-shrink-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(item.cmd);
                        }}
                        title="Copy code"
                      >
                        <Icon
                          name={copiedCmd === item.cmd ? "check" : "copy"}
                          className={`w-3.5 h-3.5 ${copiedCmd === item.cmd ? "text-green" : "text-text-muted"}`}
                        />
                      </button>
                    </div>
                    <p className="text-[11px] text-text-muted leading-snug mt-1 print:text-[7px] print:leading-tight print:mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-[1800px] mx-auto mt-10 pt-6 border-t border-border-default print:mt-4 print:pt-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted print:text-[8px]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-yellow/10 flex items-center justify-center">
              <Icon name="sparkles" className="w-4 h-4 text-yellow" />
            </div>
            <span className="text-text-secondary">AI / ML Cheat Sheet</span>
          </div>
          <div className="flex items-center gap-6 print:gap-3">
            <a
              href="https://scikit-learn.org/stable/documentation.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-text-secondary transition-colors"
            >
              <Icon name="book-open" className="w-4 h-4 print:w-3 print:h-3" />
              <span>Scikit-learn Docs</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIMLCheatSheet;
