import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify—file watching is disabled to prevent flickering during agent edits.
    hmr: process.env.DISABLE_HMR !== 'true',
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html'),
        skeletal: path.resolve(__dirname, 'systems/skeletal.html'),
        muscular: path.resolve(__dirname, 'systems/muscular.html'),
        nervous: path.resolve(__dirname, 'systems/nervous.html'),
        circulatory: path.resolve(__dirname, 'systems/circulatory.html'),
        respiratory: path.resolve(__dirname, 'systems/respiratory.html'),
        digestive: path.resolve(__dirname, 'systems/digestive.html'),
        skeletalQuiz: path.resolve(__dirname, 'quiz/skeletal-quiz.html'),
        muscularQuiz: path.resolve(__dirname, 'quiz/muscular-quiz.html'),
        nervousQuiz: path.resolve(__dirname, 'quiz/nervous-quiz.html'),
        circulatoryQuiz: path.resolve(__dirname, 'quiz/circulatory-quiz.html'),
        respiratoryQuiz: path.resolve(__dirname, 'quiz/respiratory-quiz.html'),
        digestiveQuiz: path.resolve(__dirname, 'quiz/digestive-quiz.html'),
      }
    }
  }
});
