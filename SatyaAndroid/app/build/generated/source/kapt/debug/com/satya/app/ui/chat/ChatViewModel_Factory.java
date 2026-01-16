package com.satya.app.ui.chat;

import androidx.lifecycle.SavedStateHandle;
import com.satya.app.data.repository.ChatRepository;
import com.satya.app.data.repository.SettingsRepository;
import dagger.internal.DaggerGenerated;
import dagger.internal.Factory;
import dagger.internal.QualifierMetadata;
import dagger.internal.ScopeMetadata;
import javax.annotation.processing.Generated;
import javax.inject.Provider;

@ScopeMetadata
@QualifierMetadata
@DaggerGenerated
@Generated(
    value = "dagger.internal.codegen.ComponentProcessor",
    comments = "https://dagger.dev"
)
@SuppressWarnings({
    "unchecked",
    "rawtypes",
    "KotlinInternal",
    "KotlinInternalInJava",
    "cast"
})
public final class ChatViewModel_Factory implements Factory<ChatViewModel> {
  private final Provider<ChatRepository> repositoryProvider;

  private final Provider<SettingsRepository> settingsRepositoryProvider;

  private final Provider<SavedStateHandle> savedStateHandleProvider;

  public ChatViewModel_Factory(Provider<ChatRepository> repositoryProvider,
      Provider<SettingsRepository> settingsRepositoryProvider,
      Provider<SavedStateHandle> savedStateHandleProvider) {
    this.repositoryProvider = repositoryProvider;
    this.settingsRepositoryProvider = settingsRepositoryProvider;
    this.savedStateHandleProvider = savedStateHandleProvider;
  }

  @Override
  public ChatViewModel get() {
    return newInstance(repositoryProvider.get(), settingsRepositoryProvider.get(), savedStateHandleProvider.get());
  }

  public static ChatViewModel_Factory create(Provider<ChatRepository> repositoryProvider,
      Provider<SettingsRepository> settingsRepositoryProvider,
      Provider<SavedStateHandle> savedStateHandleProvider) {
    return new ChatViewModel_Factory(repositoryProvider, settingsRepositoryProvider, savedStateHandleProvider);
  }

  public static ChatViewModel newInstance(ChatRepository repository,
      SettingsRepository settingsRepository, SavedStateHandle savedStateHandle) {
    return new ChatViewModel(repository, settingsRepository, savedStateHandle);
  }
}
