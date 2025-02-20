"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
  onStart?: () => void;
  onEnd?: () => void;
}

export function TypingAnimation({
  children,
  className,
  duration = 100,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  onStart,
  onEnd,
  ...props
}: TypingAnimationProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/typing-sound.mp3");
    audioRef.current.loop = true;
    audioRef.current.muted = true; // Mute initially to bypass autoplay restrictions
    audioRef.current.load(); // Preload the audio
  }, []);

  const playAudio = async () => {
    if (audioRef.current) {
      audioRef.current.muted = false; // Unmute when playback starts
      try {
        await audioRef.current.play();
      } catch (error) {
        console.error("Audio playback failed:", error);
      }
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
        if (onStart) onStart();
        playAudio();
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setStarted(true);
            if (onStart) onStart();
            playAudio();
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, startOnView, onStart]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    playAudio();

    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
        stopAudio();
        if (onEnd) onEnd();
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
      stopAudio();
    };
  }, [children, duration, started, onEnd]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn(
        "text-4xl font-bold leading-[5rem] tracking-[-0.02em]",
        className,
      )}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
}
