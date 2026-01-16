package com.satya.app.di;

import com.satya.app.data.local.ChatDao;
import com.satya.app.data.local.SatyaDatabase;
import dagger.internal.DaggerGenerated;
import dagger.internal.Factory;
import dagger.internal.Preconditions;
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
public final class AppModule_ProvideChatDaoFactory implements Factory<ChatDao> {
  private final Provider<SatyaDatabase> databaseProvider;

  public AppModule_ProvideChatDaoFactory(Provider<SatyaDatabase> databaseProvider) {
    this.databaseProvider = databaseProvider;
  }

  @Override
  public ChatDao get() {
    return provideChatDao(databaseProvider.get());
  }

  public static AppModule_ProvideChatDaoFactory create(Provider<SatyaDatabase> databaseProvider) {
    return new AppModule_ProvideChatDaoFactory(databaseProvider);
  }

  public static ChatDao provideChatDao(SatyaDatabase database) {
    return Preconditions.checkNotNullFromProvides(AppModule.INSTANCE.provideChatDao(database));
  }
}
