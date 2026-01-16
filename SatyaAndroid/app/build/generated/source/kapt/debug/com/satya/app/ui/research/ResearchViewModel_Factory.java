package com.satya.app.ui.research;

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
public final class ResearchViewModel_Factory implements Factory<ResearchViewModel> {
  private final Provider<ChatRepository> repositoryProvider;

  private final Provider<SettingsRepository> settingsRepositoryProvider;

  public ResearchViewModel_Factory(Provider<ChatRepository> repositoryProvider,
      Provider<SettingsRepository> settingsRepositoryProvider) {
    this.repositoryProvider = repositoryProvider;
    this.settingsRepositoryProvider = settingsRepositoryProvider;
  }

  @Override
  public ResearchViewModel get() {
    return newInstance(repositoryProvider.get(), settingsRepositoryProvider.get());
  }

  public static ResearchViewModel_Factory create(Provider<ChatRepository> repositoryProvider,
      Provider<SettingsRepository> settingsRepositoryProvider) {
    return new ResearchViewModel_Factory(repositoryProvider, settingsRepositoryProvider);
  }

  public static ResearchViewModel newInstance(ChatRepository repository,
      SettingsRepository settingsRepository) {
    return new ResearchViewModel(repository, settingsRepository);
  }
}
